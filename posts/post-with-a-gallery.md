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

Posting a gallery requires using a paired shortcode.

{% gallery %}
- ![First image](/img/image001.jpg)
- ![Second image](/img/image002.jpg)
- ![Third image](/img/image003.jpg)
{% endgallery %}
