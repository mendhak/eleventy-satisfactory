// For minifying the CSS
const CleanCSS = require("clean-css");

module.exports = function(data) {
  let filesToCombine = JSON.parse(data);
  let output = new CleanCSS().minify(filesToCombine).styles;
  return output;
};
