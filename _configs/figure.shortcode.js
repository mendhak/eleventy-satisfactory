const path = require("path");

/**
 * Paired shortcode to display a figure with caption.
 * This is very similar to the regular Markdown image,
 * But I'll keep this around in case the other way ever breaks in the future
 * Plus, this has the 'width' flexibility, and maybe more future features.
 */
module.exports = function (image, caption, widthName, markdownLibrary) {

  let width = '';
  switch (widthName) {
    case 'half':
      width = 'width: calc(50% - 0.5em);';
      break;
    case 'third':
      width = 'width: calc(33% - 0.5em);';
      break;
    case 'unconstrained':
      width = 'max-width: unset';
      break;
    default:
      break;
  }

  let captionMarkup = "";
  if (caption !== undefined && caption !== "") {
    captionMarkup = markdownLibrary.renderInline(caption);
  }

  let rendered = `<figure><a href="${image}"><img src="${image}" alt="${caption}" loading="lazy" style="${width}" /></a><figcaption>${captionMarkup}</figcaption></figure>`;
  if(widthName==='unconstrained'){
    //Since it's the image's 100% size anyway, there's no point in giving it a lightbox. Just wrap it in a figure tag, so it gets centered at least.
    rendered = `<figure style="${width}"><img src="${image}" alt="${caption}" loading="lazy" /><figcaption>${captionMarkup}</figcaption></figure>`;
  }

  return rendered;
}


