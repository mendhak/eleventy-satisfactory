
/**
 * Gets the first 30 words as the excerpt or until the newline, whichever comes first.
 */
export default function (article) {
  if (!Object.prototype.hasOwnProperty.call(article, "templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  const content = article.templateContent;

  //Take the first paragraph until newline, remove HTML
  let words = content.slice(0, content.indexOf("\n")).replace(/<[^>]*>?/gm, '').split(/\s+/);
  let suffix = '';

  if (words.length > 30) {
    suffix = '…';
  }

  let excerpt = words.slice(0, 30).join(' ') + suffix;
  return excerpt;
}


