---
title: Post with an image
description: There are different ways to post images!
tags:
  - xmas
  - netherlands
  - markdown
layout: layouts/post.njk

header:
  teaser: /img/image001.jpg

---

There are a few different ways to display an image in a post.


## Using paired shortcodes

This image is served using a paired shortcode. It produces a figure with an image, a figure caption that supports Markdown, and the image loading set to lazy.  Clicking the image displays it in a lightbox.



Here is the code:

```
{% raw %}
{% figure "/img/image001.jpg", "This is an optional alt text" %}
This ~~image~~ figure, has a `figcaption` which supports **markdown**.
{% endfigure %}
{% endraw %}
```

Here is the output:

{% figure "/img/image001.jpg", "This is an optional alt text" %}
This ~~image~~ figure, has a `figcaption` which supports **markdown**.
{% endfigure %}


## Using regular Markdown syntax

Using regular Markdown syntax is possible.

```
{% raw %}
![photo from above](/img/image001.jpg)
{% endraw %}
```

If the site sits in a subfolder, specify the image path in a template syntax like so:

```
{% raw %}
![photo from above]({{ '/img/image001.jpg' | url }})
{% endraw %}
```

Which results in:

![photo from above]({{ '/img/image001.jpg' | url }})


### Using `<figure>` HTML

This image is served using regular HTML:

```
{% raw %}
<figure>
  <img src="{{ '/img/image001.jpg' | url }}" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>
{% endraw %}
```

Which results in:


<figure>
  <img src="{{ '/img/image001.jpg' | url }}" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>
