const path = require("path");

/**
 * If a Markdown link points at an .md file, convert it to its corresponding post URL
 */
module.exports = function (tokens, idx, options, env, self) {

  let token = tokens.find(t => t.type === 'link_open');
  let link = token?.attrGet('href');

  // Only process non external links that end in a markdown file name, maybe with a hash after it.
  if (link && (!link.includes("://")) && (link.endsWith(".md") || link.includes(".md#"))) {
    let hash = '';
    let fileName = link;
    if(link.includes(".md#")){
      // A little extra work - extract the hash part out
      hash = link.split("#")[1];
      fileName = link.split("#")[0];
      if(hash){
        hash = `#${hash}`;
      }
    }
    if (env.collections?.posts?.[0]) {
      // Match on the file name without extension, eg 'customary-lorem-ipsum', then use its URL in the rendered link.
      let found = env.collections.posts.find(p =>  path.parse(p.inputPath).name === path.parse(fileName).name);

      token.attrSet('href', `${found.url}${hash}`);
    }
  }



  //return defaultLinkRender(tokens, idx, options, env, self);
  return self.renderToken(tokens, idx, options);

}
