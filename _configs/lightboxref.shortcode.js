const fs = require("fs");
const path = require("path");


/**
 * If the given post contains a figure shortcode or a markdown image, this function adds the SimpleLightbox JS and CSS so images are displayed with a lightbox.
 * @param {JSON} page - the eleventy page object, from which the `.inputPath` to the page will be read.
 * @param {String} pathPrefix - the path prefix that is used to serve URLs on the site. Usually `/`, but can be `/blog`, etc.
 * @returns
 */
module.exports = function getLightBoxIfNecessary(page){

  const str = fs.readFileSync(page.inputPath, 'utf8');

  if (str.includes('{% figure') || str.includes('![')) {
    let jsPath = '/simplelightbox/simple-lightbox.min.js';
    let cssPath = '/simplelightbox/simple-lightbox.min.css';
    return `
      <link rel="stylesheet" href="${cssPath}" />
      <script src="${jsPath}"></script>

      <script>
          (function() {
              var $gallery = new SimpleLightbox('figure a', {'overlayOpacity':0.6, 'uniqueImages': false});
          })();
      </script>
      `;
  }

  return ``;
}

