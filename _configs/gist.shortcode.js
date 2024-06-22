import MarkdownIt from "markdown-it";

/**
 * For a given Github Gist, render the gist's files as code blocks
 * @param {String} gistId - the ID of the Github Gist
 * @param {MarkdownIt} markdownLibrary - the instance of the markdown-it object to use to render the contents
 * @returns
 */
export default async function getGist(gistId, markdownLibrary) {
  let url = `https://api.github.com/gists/${gistId}`;
  let fetchOptions = {};

  let gistJson = {};
  let mdCode = '';

  // If we're running in a Github Action, the token can be used to make Github API calls with better rate limits.
  // Otherwise, without this, sometimes the API call fails due to a low rate limit.
  // To pass the token, npm run build --gisttoken=${{ secrets.GH_GIST_TOKEN }}
  if (process.env.npm_config_gisttoken || process.env.GH_GIST_TOKEN) {
    let token = process.env.npm_config_gisttoken || process.env.GH_GIST_TOKEN;
    fetchOptions.headers = { 'Authorization': `Bearer ${token}` }
  }

  /* fetch() returns a promise, but await can be used inside addNunjucksAsyncShortcode */
  let response = await fetch(url, fetchOptions);

  if (response.ok) {
    gistJson = await response.json();
  }
  else {
    console.log(await response.json());
    return '';
  }


  let description = gistJson.description;

  for (var f in gistJson.files) {
    let language = gistJson.files[f].language;
    let content = gistJson.files[f].content
    let fileName = gistJson.files[f].filename;

    if (!language) {
      language = "text"
    }
    if (language === "C#") {
      language = "csharp";
    }

    language = language.toLowerCase();


    if (language === "markdown") {
      //Special case for MD, just render it outright.
      mdCode += `\n${content}\n`;
    }
    else {
      //Surround by code tags so it gets rendered with prism
      mdCode += `\`${fileName}\`\n\`\`\`${language}\n${content}\n\`\`\`\n`;
    }

  }

  return `**${description}**\n${markdownLibrary.render(mdCode)}`;
}








