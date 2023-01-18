const path = require("path");

class FigureShortCode{
  constructor(pathPrefix, markdownLibrary){
    this.markdownLibrary = markdownLibrary;
    this.pathPrefix = pathPrefix;
  }

  figure(image, caption, widthName) {

    let width = '';
    switch (widthName) {
      case 'half':
        width = 'width: calc(50% - 0.5em);';
        break;
      case 'third':
        width = 'width: calc(33% - 0.5em);';
      default:
        break;
    }

    let captionMarkup = "";
    if (caption !== undefined && caption !== "") {
      captionMarkup = this.markdownLibrary.renderInline(caption);
    }

    let imgPath = path.join(this.pathPrefix, image);

    let rendered = `<figure><a href="${imgPath}"><img src="${imgPath}" alt="${caption}" loading="lazy" style="${width}" /></a><figcaption>${captionMarkup}</figcaption></figure>`;

    return rendered;
  }
}

module.exports = FigureShortCode;
