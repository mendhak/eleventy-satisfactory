---
title: Post with some videos, audio, and other media
description: This post contains sample videos using iframe
tags:
  - eleventy
  - iframe
  - videos
  - third-party
extraWideMedia: true

---

It's common to place third party audio, video, gists, etc. on a page using iframes. There's a shortcode to do this for YouTube and Vimeo.  


## Video shortcode

The `video` shortcode can work with YouTube and Vimeo URLs. 

### Youtube Video

This code:

```
{% raw %}{% video "https://www.youtube.com/embed/9qOvG9KeJ6c" %}{% endraw %}
```

Produces:

{% video "https://www.youtube.com/embed/9qOvG9KeJ6c" %}



### Vimeo Video

The same shortcode can be used for Vimeo videos. 

```
{% raw %}{% video "https://vimeo.com/35396305" %}{% endraw %}
```

Produces:

{% video "https://vimeo.com/35396305" %}


### Unconstrained full width video

Add the argument `unconstrained` to the shortcode to let the video go full width across the page. 

```
{% raw %}{% video "https://www.youtube.com/watch?v=DppVAQqaNE4", "unconstrained" %}{% endraw %}
```

Produces: 

{% video "https://www.youtube.com/watch?v=DppVAQqaNE4", "unconstrained" %}


## Straight up HTML 

It is possible to paste the iframe code directly in Markdown.  This works with YouTube, Vimeo and any other video sources.  

Here is an example from Twitch.tv.  Remember to remove the height and width, and wrap the iframe code in a div with class="video" as shown here.  

```html
<div class="video">
<iframe src="https://clips.twitch.tv/embed?clip=ManlyFamousBananaStoneLightning&parent=code.mendhak.com&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
</div>
```

Produces:

<div class="video">
<iframe src="https://clips.twitch.tv/embed?clip=ManlyFamousBananaStoneLightning&parent=code.mendhak.com&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
</div>




## Soundcloud audio

For Soundcloud, there's no need to change the height and width. Just copy pasting the iframe code works. 

<div class="video">
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/65462299&color=%23544d2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
</div>



