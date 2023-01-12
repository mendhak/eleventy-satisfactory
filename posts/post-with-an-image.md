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



## Using regular Markdown syntax

Using regular Markdown syntax is possible. The image gets rendered as a figure with a caption. Clicking the image displays it in a lightbox.

```
{% raw %}![A little `markdown` can work be used _here_](/img/image003.jpg){% endraw %}
```

If the site sits in a subfolder, specify the image path using the `| url` syntax like so:

```
{% raw %}![A little `markdown` can work be used _here_]({{ '/img/image003.jpg' | url }}){% endraw %}
```

Which results in:

![A little `markdown` can work be used _here_]({{ '/img/image003.jpg' | url }})


## Using the `figure` shortcode

This image is served using a shortcode. It produces a figure with an image, and a figcaption that supports Markdown.  Clicking the image displays it in a lightbox.


Here is the code:

```
{% raw %}{% figure "/img/image003.jpg", "This **image** has a `figcaption`, but it's optional" %}{% endraw %}
```


Here is the output:

{% figure "/img/image003.jpg", "This **image** has a `figcaption`, but it's optional" %}


### Smaller figure with half or third size

The image width can also be set to `half` or `third`.

```
{% raw %}{% figure "/img/image001.jpg", "", "third" %}{% endraw %}
```

Here is the output:

{% figure "/img/image001.jpg", "", "third" %}




### Using `<figure>` HTML

This image is served using regular HTML:

```
{% raw %}<figure>
  <img src="{{ '/img/image002.jpg' | url }}" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:


<figure>
  <img src="{{ '/img/image002.jpg' | url }}" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>
