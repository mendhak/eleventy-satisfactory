---
title: Post with image galleries
description: This post contains an image gallery in Markdown as well as shortcodes.
tags:
  - eleventy
  - markdown
  - shortcode
  - images
  - gallery
  - lightbox

opengraph:
  image: /assets/images/image001.jpg

---

To display a set of images (minimum 2) in a gallery, just surround the images, written as Markdown, with the `gallery` shortcode. Clicking the image shows the image in lightbox, with the title as the caption (a little Markdown might in the caption might also work).

```
{% raw %}{% gallery %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
![`Third` image](/assets/images/image003.jpg)
{% endgallery %}{% endraw %}
```

Produces this: calc(33% - 0.5em)

{% gallery %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
![`Third` image](/assets/images/image003.jpg)
{% endgallery %}




