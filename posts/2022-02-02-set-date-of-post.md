---
title: How to set the date of a post
last_modified_at: 2022-08-17
---

When writing a new post, you can set the date of the post in a few different ways.  The date of the post determines the order it appears in the post listings. 

### In the filename

The date can be set in the post's filename.  For example, `{{ page.inputPath }}` will be published to the URL `{{ page.url }}` and the date appears as `{{ page.date | readableDate }}`.  This is the best way to write posts, since having the date at the beginning helps organize the posts in order. 

### In the frontmatter

The date can also be set in the page's frontmatter. 

```
---
title: How to set the date of a post
date: 2022-02-02
---
```

### Both the file name _and_ the frontmatter

If the date is set both in the file name as well as the frontmatter, the frontmatter date takes precedence. 


### Setting a last modified date for a post

Setting the `last_modified_at` in the frontmatter modifies the display and metadata date, but without changing its order in the listing.  

```
---
title: How to set the date of a post
last_modified_at: 2022-08-17
---
```


### Posts without a date

If there's no date in the file name, or the frontmatter, then the date defaults to the time of build, so it gets updated each time the site is built.  

---

Anyway, the date appears at the bottom.

👇
