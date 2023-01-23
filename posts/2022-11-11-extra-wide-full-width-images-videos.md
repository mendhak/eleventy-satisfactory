---
title: About extra-wide images, videos and code blocks

---

By default, images, videos and code blocks are displayed wider than the (text) content around it.  This is to make it stand out and give it a little emphasis. An example of this 'full bleed' behavior can be seen on the [lorem ipsum page](./customary-lorem-ipsum.md).  


{% figure "https://live.staticflickr.com/7280/27837260711_a4f38ee02e_k.jpg", "Example of extra wide image","" %}


In some cases this might be a bit overwhelming or distracting.  

This behavior can be disabled on a per-post basis by setting the value `extraWideMedia: false` in the frontmatter of the post. An example of this can be seen on the [footer images and links page](./2022-01-05-set-footer-links.md).  



To disable it for all posts, set the value in the `posts/posts.json` file. 

```json
{
  ...
  "extraWideMedia": false
}

```


Note that disabling the `extraWideMedia` setting will also disable unconstrained (full width) images.  
