/**
 * The `gallery` paired shortcode shows a set of images and displays it in a grid.
 * It sets inGallery = true, which is used by the markdown image renderer
 */
module.exports = function gallery(data, markdownLibrary){
    const galleryContent = markdownLibrary.renderInline(data, { 'inGallery': true });
    return `<div class="gallery">${galleryContent}</div>`;
}



