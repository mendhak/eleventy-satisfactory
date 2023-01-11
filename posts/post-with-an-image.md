---
title: Post with an image
description: Have a nice christmas
tags:
  - xmas
  - netherlands
  - markdown
layout: layouts/post.njk

---

There are a few different ways to display an image in a post.


## Using paired shortcodes

This image is served using a paired shortcode, as a figure with a figcaption, and the image loading set to lazy.

It takes arguments image path, alt text, and inside is the caption.  There is no need to use template syntax, the URL is adjusted.

Here is the code:

```
{% raw %}
{% figure "/img/image001.jpg", "Road from overhead" %}
This ~~image~~ figure, has a `caption` which supports **markdown**.
{% endfigure %}
{% endraw %}
```

Here is the output:

{% figure "/img/image001.jpg", "Road from overhead" %}
This ~~image~~ figure, has a `caption` which supports **markdown**.
{% endfigure %}


## Using regular Markdown syntax

Using regular Markdown syntax is possible, but in some cases it might be necessary to specify the image path in a template syntax like so:

```
{% raw %}
![photo from above]({{ '/img/image001.jpg' | url }})
{% endraw %}
```

Which results in:

![photo from above]({{ '/img/image001.jpg' | url }})


### The same image but using `<figure>` HTML

This image is served using regular HTML, again with the template syntax:

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
