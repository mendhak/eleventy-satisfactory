import fs from "fs";
import nunjucks from "nunjucks";

/**
 * If the given post contains a figure shortcode or a markdown image, this function adds the SimpleLightbox JS and CSS so images are displayed with a lightbox.
 * @param {JSON} page - the eleventy page object, from which the `.inputPath` to the page will be read.
 * @returns
 */
export default function getLightBoxIfNecessary(page){

  const str = fs.readFileSync(page.inputPath, 'utf8');

  if (str.includes('{% figure') || str.includes('![')) {
    nunjucks.configure({ trimBlocks: true, lstripBlocks: true });
    let lightboxHtml = nunjucks.render('_includes/simplelightbox.njk');
    return lightboxHtml;
  }

  return ``;
}

