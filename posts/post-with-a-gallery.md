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

Clicking the image shows the image in lightbox, with a caption for each image (a little Markdown might work here).

```nunjucks
{% raw %}{% gallery %}
![First alt text](/assets/images/image001.jpg)
![**Second** alt text](/assets/images/image002.jpg)
![Third alt text](/assets/images/image003.jpg)
{% endgallery %}{% endraw %}
```

Produces this: 

{% gallery %}
![First alt text](/assets/images/image001.jpg)
![**Second** alt text](/assets/images/image002.jpg)
![Third alt text](/assets/images/image003.jpg)
{% endgallery %}


The image's own titles appear as captions in the lightbox, but not on the page, as it could get too crowded.

## Giving the gallery a caption

To set a caption for the gallery as a whole, pass it to the shortcode. 

```nunjucks
{% raw %}{% gallery "~~Three~~ Two images side by side" %}
![Photo of a road, taken from above](/assets/images/image001.jpg)
![Phot of a dark stave church in Norway](/assets/images/image002.jpg)
{% endgallery %}{% endraw %}
```

Produces:

{% gallery "~~Three~~ Two images side by side" %}
![Photo of a road, taken from above](/assets/images/image001.jpg)
![Photo of a dark stave church in Norway](/assets/images/image002.jpg)
{% endgallery %}

The gallery's caption appears on the page. The image's own captions still appear in the lightbox, but not on the page.

### Image alt text and captions

Just like with [regular images](./post-with-an-image.md), the alt text is used if the title is missing. It's a good idea, for accessibility, to provide an alt text and a title. 

In this example, both the alt text and caption are supplied. 

```nunjucks
{% raw %}{% gallery "Let's do both" %}
![Road in Netherlands](/assets/images/image001.jpg "This is the caption for the first image")
![Borgund Stave Church](/assets/images/image002.jpg "This is the caption for the second image")
{% endgallery %}{% endraw %}
```

Produces:

{% gallery "Let's do both" %}
![Photo of a road in Netherlands](/assets/images/image001.jpg "This is the caption for the first image")
![Photo of Borgund Stave Church](/assets/images/image002.jpg "This is the caption for the second image")
{% endgallery %}