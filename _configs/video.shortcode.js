/**
 * Paired shortcode to display an iframe video. Detects YouTube or Vimeo.
 */

export default function(url, width) {
  let style = '';
  let iframeUrl = '';
  if(width==="unconstrained"){
    style="max-width: unset;";
  }

  let youTubeId = getVideoIdFromYouTubeURL(url);

  if(youTubeId){
    iframeUrl = `https://www.youtube.com/embed/${youTubeId}`;
  }
  else {
    let vimeoId = getVideoIdFromVimeoURL(url);
    iframeUrl = `https://player.vimeo.com/video/${vimeoId}`;
  }

  let videoHtml = `<div class="video" style="${style}">
    <iframe src="${iframeUrl}" frameborder="0" allowfullscreen></iframe>
  </div>`;

  return videoHtml;


};


function getVideoIdFromYouTubeURL(url) {
	let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	let match = url.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}

function getVideoIdFromVimeoURL(url){

  let regExp = /^https:\/\/vimeo\.com\/([^#&?]*)/;
	let match = url.match(regExp);
	return match && match[1] ? match[1] : null;

}
