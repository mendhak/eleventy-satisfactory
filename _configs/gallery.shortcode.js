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
