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

module.exports = function(eleventyConfig) {
  // Copy the `img`, `css`, and `fonts` folders to the output
  // CSS isn't copied over, that's done inline via the base template.
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy({"node_modules/simplelightbox/dist/simple-lightbox.min.css": "simplelightbox/simple-lightbox.min.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/simplelightbox/dist/simple-lightbox.min.js": "simplelightbox/simple-lightbox.min.js"});


  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);


  // CSS inline minifier helper
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Paired shortcode to display a figure with caption.
  eleventyConfig.addShortcode(
    "figure",
    function(image, caption) {

      let captionMarkup = "";
      if(caption !== undefined && caption !== ""){
        captionMarkup = markdownLibrary.renderInline(caption);
      }

      let imgPath = path.join(pathPrefix, image);

      let rendered = `<figure><a href="${imgPath}"><img src="${imgPath}" alt="${caption}" loading="lazy" /></a><figcaption>${captionMarkup}</figcaption></figure>`;

      return rendered;
    }
  );

  // If the post contains a figure shortcode (defined above), add the Lightbox JS/CSS and render lightboxes for it.
  eleventyConfig.addShortcode("addLightBoxRefIfNecessary", function(){
    const str = fs.readFileSync(this.page.inputPath, 'utf8')
    if(str.includes('{% figure')){
      let jsPath = path.join(pathPrefix, 'simplelightbox/simple-lightbox.min.js');
      let cssPath = path.join(pathPrefix, 'simplelightbox/simple-lightbox.min.css');
      return `
      <link rel="stylesheet" href="${cssPath}" />
      <script src="${jsPath}"></script>

      <script>
          (function() {
              var $gallery = new SimpleLightbox('figure a', {'overlayOpacity':0.6});
          })();
      </script>
      `;
    }

    return ``;

  });

  // Generate excerpt from first paragraph
  eleventyConfig.addShortcode("excerpt", (article) =>
    extractExcerpt(article)
  );

  // Show the current year using a shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [1,2,3,4],
    slugify: eleventyConfig.getFilter("slugify")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  //Since moving the CSS inline eleventy no longer watches it (because it's not being copied to output), so I had to include it as a watch target.
  eleventyConfig.addWatchTarget("./css/");

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

// Adopted from => https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
// Gets the first 30 words as the excerpt
function extractExcerpt(article) {
  if (!Object.prototype.hasOwnProperty.call(article, "templateContent")) {
      console.warn(
          'Failed to extract excerpt: Document has no property "templateContent".'
      );
      return null;
  }

  const content = article.templateContent;

  const excerpt = content.slice(0, content.indexOf("\n")).replace(/<[^>]*>?/gm, '').split(/\s+/).slice(0, 30).join(' ') + '...';

  return excerpt;
}
