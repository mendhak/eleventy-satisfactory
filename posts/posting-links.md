---
title: How to post links to another post or an external site
description: Various ways to post links to markdown files, relative URLs or absolute URLs
date: 2022-03-01
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

You can also link to an anchor in the target file. 

```markdown
[Link using Markdown path and heading anchor](./customary-lorem-ipsum.md#tincidunt-arcu-non-sodales)
```

Produces:

[Link using Markdown path and heading anchor](./customary-lorem-ipsum.md#tincidunt-arcu-non-sodales)


### Link to another post by URL

You can also link to the output URL of the post. The blog's `pathPrefix` gets added on automatically. Remember to include the trailing slash.

```markdown
[Link using root-relative URL](/customary-lorem-ipsum/)
```

Produces:

[Link using root-relative URL](/customary-lorem-ipsum/)


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


## Buttons

It's also possible to use a button as a link. 

```
{% raw %}{% button "Button with a link", "/" %}{% endraw %}
```

Produces:

{% button "Button with a link", "/" %}



