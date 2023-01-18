const fs = require("fs");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// For minifying the CSS
const CleanCSS = require("clean-css");

const path = require("path");

// Change this to match the actual path prefix.
const pathPrefix = process.env.PATH_PREFIX || '/eleventy-mendhak-blog-theme/';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Copy the `img`, and `fonts` folders to the output
  // CSS isn't copied over, that's done inline via the base template.
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.css": "simplelightbox/simple-lightbox.min.css" });
  eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.js": "simplelightbox/simple-lightbox.min.js" });

  //Since moving the CSS inline eleventy no longer watches it (because it's not being copied to output), so I had to include it as a watch target.
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addWatchTarget("./js/");

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify")
  });

  // Wrap images in a figure, a, and figcaption.
  // This lets the simplelightbox code serve it up too!
  // Also adds loading lazy attribute
  markdownLibrary.renderer.rules.image = function (tokens, idx, options, env, slf) {

    const token = tokens[idx];
    // Set the loading=lazy attribute
    token.attrSet('loading', 'lazy');

    // Adjust the path so it works with the pathPrefix
    // This can be / or /my-blog for example
    let imgPath = token.attrGet('src');
    if (!imgPath.includes(pathPrefix) && !imgPath.includes('://')) {
      imgPath = path.join(pathPrefix, imgPath);
    }
    token.attrSet('src', imgPath);

    let captionRendered = markdownLibrary.renderInline(token.content);
    let figCaption = '';

    // If it's a gallery of images, display the caption in the lightbox.
    // Otherwise display it on the page inside figcaption.
    // This is because the caption might be too long and awkward to display
    // in a crowded area.
    if (env.inGallery) {
      token.attrSet('title', captionRendered);
    }
    else {
      figCaption = captionRendered;
    }

    // Return figure with figcaption.
    // The 'a' is the image linking to itself, which then gets picked up by simplelightbox
    return `<figure><a href="${token.attrs[token.attrIndex('src')][1]}">
      ${slf.renderToken(tokens, idx, options)}</a>
      <figcaption>${figCaption}</figcaption>
    </figure>`;
  }

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);


  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection. Used on the home page to limit number of items to display.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });


  // Filters out irrelevant tags that aren't really related to content, only used for organising things
  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Paired shortcode that takes a JSON array of CSS file paths
  // It then combines them, which includes reconciles overriden values!
  // And returns the output.
  eleventyConfig.addPairedShortcode( "cssminification", require('./_configs/cssminification.shortcode'));

  //Paired shortcode to display a notice panel like standard, error, warning, etc.
  let NoticeShortCode = require('./_configs/notice.shortcode');

  let notice = new NoticeShortCode(markdownLibrary);
  eleventyConfig.addPairedShortcode( "notice", (data, noticeType) => {  return notice.notice(data, noticeType);  }  );

  // Paired shortcode to display a figure with caption.
  // This is very similar to the regular Markdown image,
  // But I'll keep this around in case the other way ever breaks in the future
  // Plus, this has the 'width' flexibility, and maybe more future features.
  let FigureShortCode = require('./_configs/figure.shortcode');
  let figure = new FigureShortCode(pathPrefix, markdownLibrary);
  eleventyConfig.addShortcode("figure", (image, caption, widthName) => { return figure.figure(image, caption, widthName); });

  // If the post contains images, then add the Lightbox JS/CSS and render lightboxes for it.
  eleventyConfig.addShortcode("addLightBoxRefIfNecessary", function () {
    let lightbox = require('./_configs/lightboxref.shortcode');
    return lightbox(this.page, pathPrefix);
  });

  // The `gallery` paired shortcode shows a set of images and displays it in a grid.
  let GalleryShortCode = require('./_configs/gallery.shortcode');
  let gallery = new GalleryShortCode(markdownLibrary);
  eleventyConfig.addPairedShortcode( "gallery", (data) => { return gallery.gallery(data); } );

  // Generate excerpt from first paragraph
  eleventyConfig.addShortcode("excerpt", require('./_configs/excerpt.shortcode'));

  // Show the current year using a shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  let ghRepoCard = require('./_configs/githubrepocard.shortcode');
  eleventyConfig.addNunjucksAsyncShortcode("githubrepocard", ghRepoCard);

  // The `gist` shortcode renders the gist's files as code blocks
  // For some reason calling the method directly isn't possible, I have to wrap it.
  // This only works with Nunjucks because the fetch call inside is async.
  var gist = require('./_configs/gist.shortcode');
  eleventyConfig.addNunjucksAsyncShortcode("gist", async (gistId) => { return await gist(gistId, markdownLibrary) });

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });



  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });


  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is "/")
    pathPrefix: pathPrefix,
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
