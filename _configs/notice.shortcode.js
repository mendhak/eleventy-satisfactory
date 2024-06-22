export default function (data, noticeType, markdownLibrary) {
  if (!noticeType) {
    noticeType = "";
  }
  let noticeMarkup = markdownLibrary.renderInline(data);
  return `<div class="notice ${noticeType}">${noticeMarkup}</div>`;
}

