const CleanCSS = require("clean-css");
const nunjucks = require("nunjucks");

module.exports = async function(repoSlug){
  css = new CleanCSS().minify(['css/github.repocard.css']).styles;
  css = `<style>${css}</style>`;

  let url = `https://api.github.com/repos/${repoSlug}`;
  let fetchOptions = {};

  // If we're running in a Github Action, the token can be used to make Github API calls with better rate limits.
  // Otherwise, without this, sometimes the API call fails due to a low rate limit.
  // To pass the token, npm run build --githubtoken=${{ secrets.GITHUB_TOKEN }}
  if (process.env.npm_config_githubtoken || process.env.GITHUB_TOKEN) {
    let token = process.env.npm_config_githubtoken || process.env.GITHUB_TOKEN;
    fetchOptions.headers = { 'Authorization': `Bearer ${token}` }
  }

  let response = await fetch(url, fetchOptions);
  let githubJson = {};

  if (response.ok) {
    githubJson = await response.json();
  }
  else {
    console.log(await response.json());
    return '';
  }

  let repoLink = `https://github.com/${repoSlug}`;
  let stargazers = githubJson.stargazers_count;
  let stargazersLink = `${repoLink}/stargazers`;
  let forks = githubJson.forks_count;
  let networkLink = `${repoLink}/network/members`;
  let description = githubJson.description;

  nunjucks.configure({ trimBlocks: true, lstripBlocks: true });
  let htmlBox = nunjucks.render('_includes/github.repocard.njk',
                                {
                                  repoSlug: repoSlug,
                                  repoLink: repoLink,
                                  description: description,
                                  stargazers: stargazers,
                                  stargazersLink: stargazersLink,
                                  forks: forks,
                                  networkLink: networkLink
                                }
                              ).replace(/(\r\n|\n|\r)/gm, "");
  return  css + htmlBox;
}
