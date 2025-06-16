export default async function() {
  return {
    eleventyComputed: {
      permalink: function(data){
        return `/${data.page.fileSlug}/index.html`;
      }
    }
  }
}
