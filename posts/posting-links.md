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
The link must start at the project root, and end in `.md`.  

```markdown
[Link using Markdown path](/posts/customary-lorem-ipsum.md)
```

Produces:

[Link using Markdown path](/posts/customary-lorem-ipsum.md)  

You can also link to an anchor in the target file. 

```markdown
[Link using Markdown path and heading anchor](/posts/customary-lorem-ipsum.md#tincidunt-arcu-non-sodales)
```

Produces:

[Link using Markdown path and heading anchor](/posts/customary-lorem-ipsum.md#tincidunt-arcu-non-sodales)

{% notice "warning" %}
You can also link inside shortcodes such as `notice` and `figure`, like [this](/posts/customary-lorem-ipsum.md). But you can't link to an anchor yet, it [will fail](/posts/customary-lorem-ipsum.md#tincidunt-arcu-non-sodales) until [this PR is accepted](https://github.com/11ty/eleventy/pull/3276).
{% endnotice %}

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



