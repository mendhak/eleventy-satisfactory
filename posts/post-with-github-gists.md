---
title: Post with Github Gists
description: Using shortcode to put Github Gists on the page
date: 2023-01-15
tags:
  - eleventy
  - github
  - gist
  - seamless

---

Although it's possible to embed a gist using the shortcode that Github provides, it looks awful on dark mode.  This post makes use of the `gist` shortcode, which will render each file as a regular code block.


### Github Gists through shortcode

Just use the gist shortcode and give it the Gist ID which is easily visible [in the URL](https://gist.github.com/mendhak/37b74037637b5752741160058e243094).

```
{% raw %}{% gist "37b74037637b5752741160058e243094" %}{% endraw %}
```

The Gist description appears first, followed by each file name and the contents of the file.  Here is the output:


{% gist "37b74037637b5752741160058e243094" %}


### Github Gists with Markdown

If a Github Gist file contains Markdown, it'll be rendered directly onto the page.

{% gist "770907f98223b22b422be8b5e09803ab" %}

