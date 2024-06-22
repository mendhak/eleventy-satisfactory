// For minifying the CSS
import CleanCSS from "clean-css";

/**
 * Paired shortcode that takes a JSON array of CSS file paths
 * It then combines them, which includes reconciles overriden values!
 * @returns a long string of minified css
 */
export default function(data) {
  let filesToCombine = JSON.parse(data);
  let output = new CleanCSS().minify(filesToCombine).styles;
  return output;
};
