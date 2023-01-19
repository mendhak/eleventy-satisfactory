const path = require("path");

/**
 * Paired shortcode to display a figure with caption.
 * This is very similar to the regular Markdown image,
 * But I'll keep this around in case the other way ever breaks in the future
 * Plus, this has the 'width' flexibility, and maybe more future features.
 */
module.exports = function (image, caption, widthName, markdownLibrary, pathPrefix) {

  let width = '';
  switch (widthName) {
    case 'half':
      width = 'width: calc(50% - 0.5em);';
      break;
    case 'third':
      width = 'width: calc(33% - 0.5em);';
    default:
      break;
  }

  let captionMarkup = "";
  if (caption !== undefined && caption !== "") {
    captionMarkup = markdownLibrary.renderInline(caption);
  }

  let imgPath = path.join(pathPrefix, image);

  let rendered = `<figure><a href="${imgPath}"><img src="${imgPath}" alt="${caption}" loading="lazy" style="${width}" /></a><figcaption>${captionMarkup}</figcaption></figure>`;

  return rendered;
}


