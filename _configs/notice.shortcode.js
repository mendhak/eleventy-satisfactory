class NoticeShortCode{
  constructor(mdLib){
    this.markdownLibrary = mdLib;
  }
  notice(data, noticeType) {
    if (!noticeType) {
      noticeType = "";
    }
    let noticeMarkup = this.markdownLibrary.renderInline(data);
    return `<div class="notice ${noticeType}">${noticeMarkup}</div>`;
  }
}

module.exports = NoticeShortCode;
