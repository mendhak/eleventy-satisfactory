import "dotenv/config";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

import { readFile } from 'fs/promises';
const metadata = JSON.parse(
  await readFile(
    new URL('./_data/metadata.json', import.meta.url)
  )
);

// Change this to match the actual path prefix.
const pathPrefix = process.env.PATH_PREFIX || metadata.pathPrefix;


import { InputPathToUrlTransformPlugin, EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

// Various custom shortcodes and filters
import imageRenderer from "./_configs/markdownlibrary.renderer.image.js";
import cssminification from './_configs/cssminification.shortcode.js';
import notice from './_configs/notice.shortcode.js';
import button from './_configs/button.shortcode.js';
import figure from './_configs/figure.shortcode.js';
import lightbox from './_configs/lightboxref.shortcode.js';
import gallery from './_configs/gallery.shortcode.js';
import video from './_configs/video.shortcode.js';
import excerpt from './_configs/excerpt.shortcode.js';
import ghRepoCard from './_configs/githubrepocard.shortcode.js';
import gist from './_configs/gist.shortcode.js';


/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {

  // Copy the `assets` (includes images, fonts) folders to the output
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy({"assets/.well-known": ".well-known"});
  eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.css": "simplelightbox/simple-lightbox.min.css" });
  eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.js": "simplelightbox/simple-lightbox.min.js" });

  //Since moving the CSS inline eleventy no longer watches it (because it's not being copied to output), so I had to include it as a watch target.
  //Adding it to addPassthroughCopy also means it's not watched.
  eleventyConfig.addWatchTarget("assets/css/");
  eleventyConfig.addWatchTarget("assets/js/");

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: false,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify")
  });

  // Wrap images in a figure, a, and figcaption.
  // This lets the simplelightbox code serve it up too!
  // Also adds loading lazy attribute
  markdownLibrary.renderer.rules.image = (tokens, idx, options, env, slf) => imageRenderer(tokens, idx, options, env, slf, markdownLibrary);


  eleventyConfig.setLibrary("md", markdownLibrary);
  // Re-enable the indented code block feature
  eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("code"))

  // RSS
  eleventyConfig.addPlugin(pluginRss);
  // Code syntax with Prism JS
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  //Converts most URLs to URLs with pathPrefix
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Automatically convert links pointing at .md to corresponding URL.
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  // Date used below posts
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Date used in sitemap and data attribute
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
  eleventyConfig.addFilter("filterTagList", function (tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  // filter to convert content to Markdown.
  // Useful for allowing `code` in the h1
  eleventyConfig.addFilter("markdown", (content) => {
    return markdownLibrary.renderInline(content);
  });

  // Paired shortcode that takes a JSON array of CSS file paths
  // It then combines them, which includes reconciles overriden values!
  // And returns the output.
  eleventyConfig.addPairedShortcode("cssminification", cssminification);

  //Paired shortcode to display a notice panel like standard, error, warning, etc.
  eleventyConfig.addPairedShortcode("notice", (data, noticeType) => notice(data, noticeType, markdownLibrary));

  //Shortcode to render a button, optionally with a link
  eleventyConfig.addShortcode("button", button);

  // Paired shortcode to display a figure with caption.
  // This is very similar to the regular Markdown image,
  // But I'll keep this around in case the other way ever breaks in the future
  // Plus, this has the 'width' flexibility, and maybe more future features.
  eleventyConfig.addShortcode("figure", (image, caption, widthName, useLightbox=true) => figure(image, caption, widthName, useLightbox, markdownLibrary));

  // If the post contains images, then add the Lightbox JS/CSS and render lightboxes for it.
  // Since it needs access to the `page` object, we can't use arrow notation here.
  eleventyConfig.addShortcode("addLightBoxRefIfNecessary", function () { return lightbox(this.page); });

  // The `gallery` paired shortcode shows a set of images and displays it in a row together.
  eleventyConfig.addPairedShortcode("gallery", (data, caption) => gallery(data, caption, markdownLibrary));


  // The `video` shortcode gets a YouTube video and displays it
  eleventyConfig.addShortcode("video", video);

  // Generate excerpt from first paragraph
  eleventyConfig.addShortcode("excerpt", excerpt);

  // Show the current year using a shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Shortcode for Github Repo Card
  eleventyConfig.addShortcode("githubrepocard", ghRepoCard);

  // The `gist` shortcode renders the gist's files as code blocks
  // For some reason calling the method directly isn't possible, I have to wrap it.
  eleventyConfig.addShortcode("gist", async (gistId) => gist(gistId, markdownLibrary));


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
    // If your site deploys to a subdirectory, change `pathPrefix` in metadata.json.
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
