import CleanCSS from "clean-css";
import nunjucks from "nunjucks";
/**
 * Generates a Github Repo Card for a repository given a repo slug.
 * It calls the Github API to get the information out.
 * If this returns empty strings, you might be rate limited. See comment below.
 * @returns
 */
export default async function(repoSlug){

  let css = getCss();

  let repo = await getGithubApiRepoResponse(repoSlug);

  if(!repo){
    return '';
  }

  let html = getHtml(repo);

  return  css + html;
}

class GithubApiRepoResponse{
  repoSlug;
  repoLink;
  description;
  stargazers;
  stargazersLink;
  forks;
  networkLink;
  language;
}

/**
 *
 * @param {String} repoSlug - the username/reponame format slug of the Github repo
 * @returns {GithubApiRepoResponse}
 */
async function getGithubApiRepoResponse(repoSlug){
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

  if(!response.ok){
    console.log(await response.json());
    return null;
  }

  githubJson = await response.json();

  let repo = new GithubApiRepoResponse();
  repo.repoSlug = repoSlug;
  repo.repoLink = `https://github.com/${repoSlug}`;
  repo.stargazers = githubJson.stargazers_count;
  repo.stargazersLink = `${repo.repoLink}/stargazers`;
  repo.forks = githubJson.forks_count;
  repo.networkLink = `${repo.repoLink}/network/members`;
  repo.description = githubJson.description;
  repo.language = githubJson.language;

  return repo;
}

/**
 *
 * @param {GithubApiRepoResponse} repo
 * @returns {String} - Single line HTML containing the markup for a Github repo card
 */
function getHtml(repo){
  nunjucks.configure({ trimBlocks: true, lstripBlocks: true });
  let htmlBox = nunjucks.render('_includes/github.repocard.njk',
                                {
                                  repoSlug: repo.repoSlug,
                                  repoLink: repo.repoLink,
                                  description: repo.description,
                                  stargazers: repo.stargazers,
                                  stargazersLink: repo.stargazersLink,
                                  forks: repo.forks,
                                  networkLink: repo.networkLink,
                                  language: repo.language
                                }
                              );
  htmlBox = htmlBox.replace(/(\r\n|\n|\r)/gm, "");
  return htmlBox;
}

function getCss(){
  let css = new CleanCSS().minify(['assets/css/github.repocard.css']).styles;
  css = `<style>${css}</style>`;
  return css;
}
