const path = require("path");

/**
 * If a Markdown link points at an .md file, convert it to its corresponding post URL
 */
module.exports = function (tokens, idx, options, env, self) {

  let link = tokens[0].attrGet('href');
  if (link && link.endsWith(".md")) {
    if (env.collections?.posts?.[0]) {
      // Match on the file name without extension, eg 'customary-lorem-ipsum', then use its URL in the rendered link.
      let found = env.collections.posts.find(p =>  path.parse(p.inputPath).name === path.parse(link).name);
      tokens[0].attrSet('href', found.url);
    }
  }

  //return defaultLinkRender(tokens, idx, options, env, self);
  return self.renderToken(tokens, idx, options);

}
