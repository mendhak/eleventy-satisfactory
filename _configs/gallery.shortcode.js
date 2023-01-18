/**
 * The `gallery` paired shortcode shows a set of images and displays it in a grid.
 * It sets  inGallery = true, which is used by the markdown image renderer
 */
class GalleryShortCode{
  constructor(markdownLibrary){
    this.markdownLibrary = markdownLibrary;
  }
  gallery(data){
    const galleryContent = this.markdownLibrary.renderInline(data, { 'inGallery': true });
    return `<div class="gallery">${galleryContent}</div>`;
  }
}

module.exports = GalleryShortCode;
