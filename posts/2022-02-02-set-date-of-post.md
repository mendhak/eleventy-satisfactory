---
title: How to set the date of a post
---

When writing a new post, you can set the date of the post in a few different ways.  

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

If the date is set both in the file name as well as the frontmatter, the frontmatter date takes precedence.  This is a good way of 'updating' a post.  The file name is the original date, and the frontmatter is the latest.  


### Posts without a date

If there's no date in the file name, or the frontmatter, then the date defaults to the time of build, so it gets updated each time the site is built.  

---

Anyway, the date appears at the bottom.

👇
