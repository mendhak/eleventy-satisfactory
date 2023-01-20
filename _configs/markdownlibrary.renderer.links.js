const path = require("path");

/**
 * If a Markdown link starts with "/", adds the blog's `pathPrefix` to the path.
 */
module.exports = function (tokens, idx, options, env, self, pathPrefix) {

  let link = tokens[0].attrGet('href');
  if (link && link.endsWith(".md")) {
    if (env.collections && env.collections.posts && env.collections.posts[0]) {
      // Match on the file name without extension, eg 'customary-lorem-ipsum', then use its URL in the rendered link.
      let found = env.collections.posts.find(p =>  path.parse(p.inputPath).name === path.parse(link).name);
      tokens[0].attrSet('href', path.join(pathPrefix, found.url));
    }
  }
  else if (link && link.startsWith("/") && !link.startsWith(pathPrefix)) {
    tokens[0].attrSet('href', path.join(pathPrefix, link));
  }
  //return defaultLinkRender(tokens, idx, options, env, self);
  return self.renderToken(tokens, idx, options);

}
