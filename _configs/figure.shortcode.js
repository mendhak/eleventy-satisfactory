/**
 * Paired shortcode to display a figure with caption.
 * This is very similar to the regular Markdown image,
 * But I'll keep this around in case the other way ever breaks in the future
 * Plus, this has the 'width' flexibility, and maybe more future features.
 */
export default function (image, caption, widthName, useLightbox, markdownLibrary) {

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
  let linkOpen = "", linkClose = "";
  if (caption !== undefined && caption !== "") {
    captionMarkup = markdownLibrary.renderInline(caption);
  }

  if(useLightbox){
    // We've configure simplelightbox to render if there's a `figure > a`.
    linkOpen = `<a href="${image}">`;
    linkClose = `</a>`;
  }

  let rendered = `<figure>${linkOpen}<img src="${image}" alt="${caption}" loading="lazy" style="${width}" />${linkClose}<figcaption>${captionMarkup}</figcaption></figure>`;
  if(widthName==='unconstrained'){
    //Since it's the image's 100% size anyway, there's no point in giving it a lightbox. Just wrap it in a figure tag, so it gets centered at least.
    rendered = `<figure style="${width}"><img src="${image}" alt="${caption}" loading="lazy" /><figcaption>${captionMarkup}</figcaption></figure>`;
  }

  return rendered;
}


