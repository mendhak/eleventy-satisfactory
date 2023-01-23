---
title: Post with some third party media
description: This post contains sample videos using iframe
tags:
  - eleventy
  - iframe
  - videos
  - third-party
fullBleedMedia: true

---

It's common to place third party audio, video, gists, etc. on a page using iframes. Just paste the iframe code directly into the post. To make videos fit responsively, remove the height and width attributes and wrap it in a div with `class="video"`.

### Youtube Video

For YouTube, this code:

```html
<div class="video">
  <iframe
    src="https://www.youtube.com/embed/9qOvG9KeJ6c"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen></iframe>
</div>
```

Produces:

<div class="video">
  <iframe
    src="https://www.youtube.com/embed/9qOvG9KeJ6c"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen></iframe>
</div>

### Vimeo video

Similarly for Vimeo,

```html
<div class="video">
  <iframe class="video" 
    src="https://player.vimeo.com/video/35396305?h=6ba64096f6" 
    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

Produces:

<div class="video">
  <iframe class="video" 
    src="https://player.vimeo.com/video/35396305?h=6ba64096f6" 
    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>




### Soundcloud audio

For Soundcloud, there's no need to change the height and width.

<div class="video">
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/65462299&color=%23544d2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
</div>



