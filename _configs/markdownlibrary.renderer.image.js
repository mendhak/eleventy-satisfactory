import * as path from 'path'
/**
 * Wrap images in a figure, a, and figcaption.
 * This lets the simplelightbox code serve it up too!
 * Also adds loading lazy attribute
 */

export default function (tokens, idx, options, env, slf, pathPrefix, markdownLibrary) {
  const token = tokens[idx];

  // Not sure why I need to set the alt attribute here. Without this the alt is just empty. 
  token.attrSet('alt', token.content);

  // Set the loading=lazy attribute
  token.attrSet('loading', 'lazy');

  // If this image is wrapped in an a link, don't make it a lightbox image. Just return.
  if (tokens[idx - 1] && tokens[idx - 1].type === 'link_open') {
    return slf.renderToken(tokens, idx, options, env);
  }


  // When I put this src in a custom attribute, eleventy doesn't automatically resolve its path. 
  // Would be nice if I could have passed the eleventy method in and done it. 
  const dataSrc = path.join(pathPrefix, token.attrGet('src'));

  // Choose the alt text (token.content) as the caption, but if a title is provided, use that instead.
  let captionRendered = markdownLibrary.renderInline(token.content);
  if (token.attrGet('title')) {
    captionRendered = markdownLibrary.renderInline(token.attrGet('title'));
    token.attrSet('title', ''); // Clear the title attribute so it doesn't show up as a tooltip on hover.
  }

  // When called from the gallery shortcode.
  if (env.inGallery) {
    // This is a gallery of images, so display the caption in the lightbox by setting data-caption.
    // and return the span + image without the figure/figcaption wrapper. 

    token.attrSet('data-caption', captionRendered); // This causes the caption to be displayed in the lightbox.
    token.attrSet('style', "width: calc(33% - 0.5em);");
    if (env.evenItems) {
      token.attrSet('style', "width: calc(50% - 0.5em);");
    }

    return `<span class="lightbox-image" data-src="${dataSrc}">${slf.renderToken(tokens, idx, options)}</span>`;
  }

  // Otherwise, this is a standalone image. Wrap it in a figure and figcaption, and make it a lightbox image.
  return `<figure><span class="lightbox-image" data-src="${dataSrc}">
    ${slf.renderToken(tokens, idx, options)}</span>
    <figcaption>${captionRendered}</figcaption>
  </figure>`;

}
