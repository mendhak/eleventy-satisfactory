---
title: How to post a link
description: Various ways to post links
date: 2018-08-24
tags:
  - second tag
  - posts with two tags

---

Various ways to post links to other posts in the same blog and external links too. 

Linking to another post in the same blog requires using a `| url` filter like this:

```markdown
[Link to another page]({{ '/second-post' | url }})
```

Produces:

[Link to another page]({{ '/second-post' | url }})


### External links

```markdown
[link text](https://example.com)
```

Produces:

[link text](https://example.com)

### Link with a title

```markdown
[link with title](https://example.com "title text!")
```
Produces:

[link with title](https://example.com "title text!")
