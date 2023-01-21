---
title: Post with an image
description: There are different ways to post images!
tags:
  - eleventy
  - markdown
  - shortcode
  - images
  - lightbox

opengraph:
  image: /images/image001.jpg

---

There are a few different ways to display an image in a post.



## Using regular Markdown syntax

Using regular Markdown syntax is possible. The image gets rendered as a figure with a caption. Clicking the image displays it in a lightbox.

```
{% raw %}![A little `markdown` can work be used _here_](/images/image003.jpg){% endraw %}
```

Which results in:

![A little `markdown` can work be used _here_](/images/image003.jpg)


## Using the `figure` shortcode

This image is served using a shortcode. It produces a figure with an image, and a figcaption that supports Markdown.  Clicking the image displays it in a lightbox.

Here is the code:

```
{% raw %}{% figure "/images/image001.jpg", "Your **caption**" %}{% endraw %}
```

Here is the output:

{% figure "/images/image001.jpg", "Your **caption**" %}


The image width can also be set to `half` or `third`.


```
{% raw %}{% figure "/images/image001.jpg", "Your **caption**", "third" %}{% endraw %}
```

Here is the output:

{% figure "/images/image001.jpg", "Your **caption**", "third" %}




### Using `<figure>` HTML

This image is served using regular HTML. No lightbox is produced.

```
{% raw %}<figure>
  <img src="/images/image002.jpg" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:


<figure>
  <img src="/images/image002.jpg" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>


Adding a hyperlink to the image will make it appear in a lightbox.


```
{% raw %}<figure>
  <a href="/images/image002.jpg"><img src="/images/image002.jpg" alt="Image served using HTML"></a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:

<figure>
  <a href="/images/image002.jpg"><img src="/images/image002.jpg" alt="Image served using HTML"></a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>
