const MarkdownIt = require("markdown-it");

class GistShortCode {
  /**
   *
   * @param {MarkdownIt} markdownLibrary
   */
  constructor(markdownLibrary){
    if(!markdownLibrary){
      throw new Error("The markdownLibrary parameter is required.");
    }

    /** @type {MarkdownIt} */
    this.markdownLibrary = markdownLibrary;
  }

  /**
   * Given a `gistId`, renders the files inside using code samples. Don't forget to pass the `markdownLibrary` object in the constructor.
   * @param {String} gistId - the ID of the Github Gist, from the URL.
   */
  async getGist(gistId) {
    let url = `https://api.github.com/gists/${gistId}`;
        let fetchOptions = {};

        let gistJson = {};
        let mdCode = '';

        // If we're running in a Github Action, the token can be used to make Github API calls with better rate limits.
        // Otherwise, without this, sometimes the API call fails due to a low rate limit.
        // To pass the token, npm run build --ghtoken=${{ secrets.GITHUB_TOKEN }}
        if (process.env.npm_config_ghtoken){
          console.log('in the if block')
          fetchOptions.headers = { 'Authorization': `Bearer ${process.env.npm_config_ghtoken}`}
        }

        /* fetch() returns a promise, but await can be used inside addNunjucksAsyncShortcode */
        let response = await fetch(url, fetchOptions);

        if(response.ok){
          gistJson = await response.json();
        }
        else {
          console.log(await response.json());
          return '';
        }


        let description = gistJson.description;

        for (var f in gistJson.files){
          let language = gistJson.files[f].language;
          let content = gistJson.files[f].content
          let fileName = gistJson.files[f].filename;

          if(!language){
            language = "text"
          }
          if(language==="C#"){
            language = "csharp";
          }

          language = language.toLowerCase();


          if(language==="markdown"){
            //Special case for MD, just render it outright.
            mdCode += `\n${content}\n`;
          }
          else {
            //Surround by code tags so it gets rendered with prism
            mdCode += `\`${fileName}\`\n\`\`\`${language}\n${content}\n\`\`\`\n`;
          }

        }

        return `**${description}**\n${this.markdownLibrary.render(mdCode)}`;
  }
}


module.exports = GistShortCode;




