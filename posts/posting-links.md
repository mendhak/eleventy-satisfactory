---
title: How to post a link
description: Various ways to post links
date: 2018-08-24
tags:
  - second tag
  - posts with two tags

---

Various ways to post links to other posts in the same blog and external links too. 

### Link to another post

Linking to another post in the same blog can be done with the usual Markdown syntax. If the path starts with `/`, the blog's `pathPrefix` gets added in. 

```markdown
[Link to another page](/customary-lorem-ipsum)
```

Produces:

[Link to another page](/customary-lorem-ipsum)

Another way to do it is to use a `| url` filter like this:

```markdown
{% raw %}[Link to another page]({{ '/customary-lorem-ipsum' | url }}){% endraw %}
```

Produces:

[Link to another page](/customary-lorem-ipsum)


### External links

```markdown
[Link text](https://example.com)
```

Produces:

[Link text](https://example.com)

### Link with a title

```markdown
[Link with title](https://example.com "title text!")
```
Produces:

[Link with title](https://example.com "title text!")
