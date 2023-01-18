// For minifying the CSS
const CleanCSS = require("clean-css");

/**
 * Paired shortcode that takes a JSON array of CSS file paths
 * It then combines them, which includes reconciles overriden values!
 * @returns a long string of minified css
 */
module.exports = function(data) {
  let filesToCombine = JSON.parse(data);
  let output = new CleanCSS().minify(filesToCombine).styles;
  return output;
};
