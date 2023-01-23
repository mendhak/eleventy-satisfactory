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
  image: /assets/images/image001.jpg

---

There are a few different ways to display an image in a post.



## Using regular Markdown syntax

Using regular Markdown syntax is possible. The image gets rendered as a figure with a caption. Clicking the image displays it in a lightbox.

```
{% raw %}![A little `markdown` can work be used _here_](/assets/images/image003.jpg){% endraw %}
```

Which results in:

![A little `markdown` can work be used _here_](/assets/images/image003.jpg)


## Using the `figure` shortcode

The `figure` shortcode is similar to the above, but it has some extra features. It produces a figure with an image, and a figcaption that supports Markdown.  Clicking the image displays it in a lightbox.

Here is the code:

```
{% raw %}{% figure "/assets/images/image001.jpg", "Your **caption**" %}{% endraw %}
```

Here is the output:

{% figure "/assets/images/image001.jpg", "Your **caption**" %}


### `figure` with widths

The image width can also be set to `half`, `third`, or `unconstrained`.  It's the third argument to pass to the shortcode. 


```
{% raw %}{% figure "/assets/images/image001.jpg", "Your **caption**", "third" %}{% endraw %}
```

Here is the output:

{% figure "/assets/images/image001.jpg", "Your **caption**", "third" %}

### Disable lightbox

The lightbox can be disabled, it is the fourth argument to pass to the shortcode. 

```
{% raw %}{% figure "/assets/images/image001.jpg", "", "", false %}{% endraw %}
```

Produces:

{% figure "/assets/images/image001.jpg", "", "", false %}


## Straight up HTML

Straight up HTML can be used in Markdown.  In this example no lightbox is produced.

```
{% raw %}<figure>
  <img src="/assets/images/image002.jpg" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:


<figure>
  <img src="/assets/images/image002.jpg" alt="Image served using HTML">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>


### ...with a lightbox

Adding a hyperlink to the image will make it appear in a lightbox.


```
{% raw %}<figure>
  <a href="/assets/images/image002.jpg"><img src="/assets/images/image002.jpg" alt="Image served using HTML"></a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:

<figure>
  <a href="/assets/images/image002.jpg"><img src="/assets/images/image002.jpg" alt="Image served using HTML"></a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>


### Standalone `<img>`

Using the `<img>` HTML tag, the image is shown as-is, no lightbox, no center alignment. 

<img src="/assets/images/image002.jpg" alt="Image served using HTML">

