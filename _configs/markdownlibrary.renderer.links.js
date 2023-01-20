const path = require("path");

/**
 * If a Markdown link starts with "/", adds the blog's `pathPrefix` to the path.
 */
module.exports = function (tokens, idx, options, env, self, pathPrefix) {

  let link = tokens[0].attrGet('href');
  if(link && link.startsWith("/") && !link.startsWith(pathPrefix)){
    tokens[0].attrSet('href', path.join(pathPrefix, link));
  }
  //return defaultLinkRender(tokens, idx, options, env, self);
  return self.renderToken(tokens, idx, options);

}
