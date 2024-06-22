/**
 * Wrap images in a figure, a, and figcaption.
 * This lets the simplelightbox code serve it up too!
 * Also adds loading lazy attribute
 */

export default function (tokens, idx, options, env, slf, markdownLibrary) {

  const token = tokens[idx];
  // Set the loading=lazy attribute
  token.attrSet('loading', 'lazy');

  let captionRendered = markdownLibrary.renderInline(token.content);


  if (env.inGallery) {
    // This is a gallery of images, so display the caption in the lightbox (by setting its title),
    // and only return an image, because the gallery is taking care of the <figure>.
    // This is because the caption might be too long and awkward to display
    // in a crowded area.
    token.attrSet('title', captionRendered);
    token.attrSet('style', "width: calc(33% - 0.5em);");
    if (env.evenItems) {
      token.attrSet('style', "width: calc(50% - 0.5em);");
    }

    return `<a href="${token.attrs[token.attrIndex('src')][1]}">${slf.renderToken(tokens, idx, options)}</a>`;
  }

  // This is a standalone image, so return figure with figcaption.
  // The 'a' is the image linking to itself, which then gets picked up by simplelightbox
  return `<figure><a href="${token.attrs[token.attrIndex('src')][1]}">
    ${slf.renderToken(tokens, idx, options)}</a>
    <figcaption>${captionRendered}</figcaption>
  </figure>`;
}
