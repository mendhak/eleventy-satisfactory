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

To display a set of images in a gallery, just surround the images, written as Markdown, with the `gallery` shortcode. 

Clicking the image shows the image in lightbox, with the title as the caption (a little Markdown might in the caption might also work).

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


The image's own titles appear as captions in the lightbox, but not on the page, as it could get too crowded.

### Gallery with caption

To set a caption for the gallery as a whole, pass it to the shortcode. 

```
{% raw %}{% gallery "~~Three~~ Two images side by side" %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
{% endgallery %}{% endraw %}
```

Produces:

{% gallery "~~Three~~ Two images side by side" %}
![First image](/assets/images/image001.jpg)
![**Second** image](/assets/images/image002.jpg)
{% endgallery %}

The gallery's caption appears on the page.  The image's own captions still appear in the lightbox, just not on the page.
