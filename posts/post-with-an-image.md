---
title: Post with an image
description: Have a nice christmas
tags:
  - xmas
  - netherlands
  - markdown
layout: layouts/post.njk

---

I visited the Netherlands.  It was nice.


## Here is a photo.

Using regular Markdown syntax.

```
{% raw %}
![photo from above]({{ '/img/image001.jpg' | url }})
{% endraw %}
```

Which results in:

![photo from above]({{ '/img/image001.jpg' | url }})


### The same photo but using `<figure>` HTML

This image is served using regular HTML.

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


### Using paired shortcodes

This image is served using a paired shortcode, `figure`.  Here is the code:

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
