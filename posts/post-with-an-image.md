---
title: Post with various images
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

Using regular Markdown syntax is possible. Most images will be rendered with a lightbox and a caption, taken from alt text or title. 

Here is an image with alt text and a caption. The caption appears below the image.

```markdown
{% raw %}![This is the alt text](/assets/images/image003.jpg "This is the caption"){% endraw %}
```

Result:

![This is the alt text](/assets/images/image003.jpg "This is the caption")


If you just provide alt text, that will get used as the caption instead. 


```markdown
{% raw %}![This is the caption now](/assets/images/image003.jpg){% endraw %}
```

Result:

![This is the caption now](/assets/images/image003.jpg)

You can use a little **markdown** in the caption. 

```markdown
{% raw %}![This is the _alt_ text](/assets/images/image003.jpg "This is the **caption**"){% endraw %}
```

Result:

![This is the _alt_ text](/assets/images/image003.jpg "This is the **caption**")


### Image links don't get a lightbox

As an exception, if the image is wrapped in a link, it won't get a lightbox. 

Image that links to example.com:

```markdown
{% raw %}[![This is the alt text](/assets/images/image003.jpg "This will appear as a title")](https://example.com){% endraw %}
```

[![This is the alt text](/assets/images/image003.jpg "This will appear as a title")](https://example.com)



## Using the `figure` shortcode

The `figure` shortcode is similar to the normal Markdown image syntax, but it has some extra features. 

There are some width options, and the lightbox can be disabled.

Here is the code:

```nunjucks
{% raw %}{% figure "/assets/images/image001.jpg", "Your **caption**" %}{% endraw %}
```

Result:

{% figure "/assets/images/image001.jpg", "Your **caption**" %}


### Width options

The image width can also be set to `default`, `half`, `third`, or `unconstrained`.  It's the third argument to pass to the shortcode. 


```nunjucks
{% raw %}{% figure "/assets/images/image001.jpg", "Your **caption**", "third" %}{% endraw %}
```

Here is the output:

{% figure "/assets/images/image001.jpg", "Your **caption**", "third" %}

### Disable lightbox

The lightbox can be disabled, it is the fourth argument to pass to the shortcode. 

```nunjucks
{% raw %}{% figure "/assets/images/image001.jpg", "Your caption", "", false %}{% endraw %}
```

Produces:

{% figure "/assets/images/image001.jpg", "Your caption", "", false %}

### Alt text

For accessibility, the alt text of an image should describe the contents of an image, it's not the same as a caption. 

The `figure` shortcode has an optional 5th argument, which is the alt text.  If not provided, it will be an empty string. 

```nunjucks
{% raw %}{% figure "/assets/images/image001.jpg", "Image credit [flickr/mendhak](https://www.flickr.com/photos/mendhak/4079354373)", "", true, "This is the alt text" %}{% endraw %}
```

Produces:

{% figure "/assets/images/image001.jpg", "Image credit [flickr/mendhak](https://www.flickr.com/photos/mendhak/4079354373)", "", true, "This is the alt text" %}

### Unconstrained full width image

The `unconstrained` width option will let the image render to its full width, across the entire page.  The lightbox is disabled if the width is set to unconstrained. 

```nunjucks
{% raw %}{% figure "https://live.staticflickr.com/65535/49241129673_0f0d5f2751_4k.jpg", 
          "Icy cold lake", 
          "unconstrained", 
          true, 
          "a cold lake with mountains in the background" %}{% endraw %}
```

Produces: 

{% figure "https://live.staticflickr.com/65535/49241129673_0f0d5f2751_4k.jpg", 
          "Icy cold lake", 
          "unconstrained", 
          true , 
          "a cold lake with mountains in the background" %}




## Straight up HTML

HTML can be directly used in Markdown.  In this example no lightbox is produced.

```html
{% raw %}<figure>
  <img src="/assets/images/image002.jpg" alt="An image of a dark, wooden church in the Norwegian countryside">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:


<figure>
  <img src="/assets/images/image002.jpg" alt="An image of a dark, wooden church in the Norwegian countryside">
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>


### ...with a lightbox

Adding a hyperlink to the image will make it appear in a lightbox.


```html
{% raw %}<figure>
  <a href="/assets/images/image002.jpg">
    <img src="/assets/images/image002.jpg" alt="An image of a dark, wooden church in the Norwegian countryside">
  </a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>{% endraw %}
```

Which results in:

<figure>
  <a href="/assets/images/image002.jpg">
    <img src="/assets/images/image002.jpg" alt="An image of a dark, wooden church in the Norwegian countryside">
  </a>
  <figcaption>
    An image served using HTML figure and figcaption
  </figcaption>
</figure>


### Standalone `<img>`

Using the `<img>` HTML tag, the image is shown as-is, no lightbox, no center alignment. 

```html
{% raw %}<img src="/assets/images/image002.jpg" alt="Image served using HTML">{% endraw %}
```

Produces:

<img src="/assets/images/image002.jpg" alt="Image served using HTML">

