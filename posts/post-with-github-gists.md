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

Just use the gist shortcode and give it the Gist ID which is easily visible in the URL.

```
{% raw %}{% gist "37b74037637b5752741160058e243094" %}{% endraw %}
```

The Gist description appears first, followed by each file name and the contents of the file.  Here is the output:



{% gist "37b74037637b5752741160058e243094" %}


