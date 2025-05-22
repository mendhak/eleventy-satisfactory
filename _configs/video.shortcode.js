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
  let timeStamp = getYouTubeTimeStampFromURL(url);

  if(youTubeId){
    iframeUrl = `https://www.youtube.com/embed/${youTubeId}${timeStamp}`;
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

function getYouTubeTimeStampFromURL(url) {
  let regExp = /[?&]t=(?:(\d+)m(\d+)s|(\d+)s)/;

  let match = url.match(regExp);
  return match ?
  (match[1] && match[2] ? `?start=${match[1]*60 + parseInt(match[2])}` :
   match[3] ? `?start=${match[3]}` : '') : '';
}

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
