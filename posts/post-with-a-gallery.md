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

To display a set of images in a gallery, just surround the images (written as Markdown), with the `gallery` shortcode. Clicking the image shows the image in lightbox, with the caption. A little Markdown might in the caption might also work.

```
{% raw %}{% gallery %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
![`Third` image](/assets/images/image003.jpg)
{% endgallery %}{% endraw %}
```

Produces this:

{% gallery %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
![`Third` image](/assets/images/image003.jpg)
{% endgallery %}

The images are constrained to a fixed size. The captions don't appear on the page, as they would for standalone images, because it's crowded and can get awkward quickly.


## Using gallery and figure shortcodes together

It's also possible to use the `figure` shortcode inside the `gallery` shortcode.

```
{% raw %}{% gallery %}
{% figure "/assets/images/image001.jpg", "Fourth **caption**" %}
{% figure "/assets/images/image002.jpg", "Fifth *caption*" %}
{% figure "/assets/images/image003.jpg", "Sixth `caption`" %}
{% endgallery %}{% endraw %}
```

Produces this:

{% gallery %}
{% figure "/assets/images/image001.jpg", "Fourth **caption**" %}
{% figure "/assets/images/image002.jpg", "Fifth *caption*" %}
{% figure "/assets/images/image003.jpg", "Sixth `caption`" %}
{% endgallery %}

In this case, the caption appears below the images, but not in the lightbox.  This is because the shortcodes are rendered independently. This can get crowded and awkward, I'm not sure if this is a good idea.
