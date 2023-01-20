---
title: How to post a link
description: Various ways to post links
date: 2018-08-24
tags:
  - second tag
  - posts with two tags

---

Various ways to post links to other posts in the same blog, and external links too. 

### Link to another post by its file name

This is a local editor friendly way, just link straight to the Markdown file.  
If the link ends with `.md`, the renderer will try to find and convert it to the matching output URL. 

```markdown
[Link using Markdown path](./customary-lorem-ipsum.md)
```

Produces:

[Link using Markdown path](./customary-lorem-ipsum.md)



### Link to another post by URL

You can also link to the output URL of the post. The blog's `pathPrefix` gets added on automatically. 

```markdown
[Link using post's URL](/customary-lorem-ipsum)
```

Produces:

[Link using post's URL](/customary-lorem-ipsum)


### External links


```markdown
[External link](https://example.com)
```

Produces:

[External link](https://example.com)

### Link with a title

```markdown
[Link with a title](https://example.com "title text!")
```
Produces:

[Link with a title](https://example.com "title text!")
