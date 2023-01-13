---
title: Post with a gallery
description: This post contains a gallery
tags:
  - xmas
  - netherlands
  - markdown
layout: layouts/post.njk

header:
  teaser: /img/image001.jpg

---

To display a set of images in a gallery, write the images as a set of list items, and then surround it with the gallery shortcode.

The image caption will also appear in the lightbox.  A little Markdown might in the caption might also work.

```
{% raw %}{% gallery %}
- ![_First_ image](/img/image001.jpg)
- ![**Second** image](/img/image002.jpg)
- ![`Third` image](/img/image003.jpg)
{% endgallery %}{% endraw %}
```

Produces this:

{% gallery %}
- ![_First_ image](/img/image001.jpg)
- ![**Second** image](/img/image002.jpg)
- ![`Third` image](/img/image003.jpg)
{% endgallery %}
