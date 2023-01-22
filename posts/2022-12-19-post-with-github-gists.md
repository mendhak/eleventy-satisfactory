---
title: Post with seamless Github Gists
description: Using shortcode to put Github Gists on the page
tags:
  - eleventy
  - github
  - gist
  - seamless

---

Although it's possible to embed a gist using the shortcode that Github provides, it looks awful on dark mode.  This post makes use of the `gist` shortcode, which will render each file as a regular code block so that the Gist's contents look like any other blog content.


### Github Gists through shortcode

Just use the gist shortcode and give it the Gist ID which is easily visible [in the URL](https://gist.github.com/mendhak/37b74037637b5752741160058e243094).

```
{% raw %}{% gist "37b74037637b5752741160058e243094" %}{% endraw %}
```

The Gist description appears first, followed by each file name and the contents of the file.  Here is the output:


{% gist "37b74037637b5752741160058e243094" %}


### Github Gists with Markdown

If a Github Gist file [contains Markdown like this one](https://gist.github.com/mendhak/770907f98223b22b422be8b5e09803ab), it'll be rendered directly onto the page.

{% gist "770907f98223b22b422be8b5e09803ab" %}


### Special note about Github Gists and rate limits

If the Gists start to appear empty sometimes, this could be because the IP address you ran the build from was rate limited by Github. This can commonly happen when running from Github Actions.  

To get gists to more reliably appear, [generate a token on Github](https://github.com/settings/tokens) with the `gists` permission.  

Under `Security > Secrets and variables > Actions` create a new secret named `GH_GIST_TOKEN` and paste that value in there. 

This secret value should get picked up the next time the action runs.  

If not running on Github Actions, you'll need to [generate a token on Github](https://github.com/settings/tokens) with the `gists` permission. Then pass that as a `--gisttoken` argument when running the `npm run build` or `npm run serve` commands, for example:

```bash
npm run serve --gisttoken=xxxxxxxxxxxxxxxxx
```
