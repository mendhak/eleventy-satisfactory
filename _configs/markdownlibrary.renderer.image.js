const path = require("path");

/**
 * Wrap images in a figure, a, and figcaption.
 * This lets the simplelightbox code serve it up too!
 * Also adds loading lazy attribute
 */
class MarkdownLibraryImageRender {
  constructor(markdownLibrary, pathPrefix) {
    this.markdownLibrary = markdownLibrary;
    this.pathPrefix = pathPrefix;
  }


  image(tokens, idx, options, env, slf) {

    const token = tokens[idx];
    // Set the loading=lazy attribute
    token.attrSet('loading', 'lazy');

    // Adjust the path so it works with the pathPrefix
    // This can be / or /my-blog for example
    let imgPath = token.attrGet('src');
    if (!imgPath.includes(this.pathPrefix) && !imgPath.includes('://')) {
      imgPath = path.join(this.pathPrefix, imgPath);
    }
    token.attrSet('src', imgPath);

    let captionRendered = this.markdownLibrary.renderInline(token.content);
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
}

module.exports = MarkdownLibraryImageRender;
