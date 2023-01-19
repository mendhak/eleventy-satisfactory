
function showDraft(data) {
	return process.env.ELEVENTY_ENV === 'development';
}

module.exports = function() {
	return {
		eleventyComputed: {
			eleventyExcludeFromCollections: function(data) {
				if(showDraft(data)) {
					return data.eleventyExcludeFromCollections;
				}
				else {
					return true;
				}
			},
			permalink: function(data) {
				if(showDraft(data)) {
					return `/${data.page.fileSlug}/index.html`;
				}
				else {
					return false;
				}
			}
		}
	}
}
