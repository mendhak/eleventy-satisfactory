export default function(text, url) {

  let buttonHtml = `<button>${text}</button>`;
  if(url){
    buttonHtml = `<a href="${url}">${buttonHtml}</a>`;
  }

  return buttonHtml;
}

