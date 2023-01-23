---
title: Post with Github Repo Cards
description: Widget to showcase a single repo

---

How to display a Github repo card.  Fetches the description, stars and forks.  

To display it on a page use the `githubrepocard` shortcode.  

```
{% raw %}{% githubrepocard 'mendhak/gpslogger' %}{% endraw %}
```

Produces:

{% githubrepocard 'mendhak/gpslogger' %}

This should also work for third party Github repos, not just yours. 

```
{% raw %}{% githubrepocard 'mozilla/send' %}{% endraw %}
```

Produces: 

{% githubrepocard 'mozilla/send' %}


### Special note about Github Repo Cards and rate limits

If the Repo Card area start to appear empty sometimes, this could be because the IP address you ran the build from was rate limited by Github. This can commonly happen when running from Github Actions.  

If running from Github Actions, no need to do anything, the [automatically generated `GITHUB_TOKEN`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) should get passed in to the action and used by the API calls. 

If not running on Github Actions, you'll need to [generate a token on Github](https://github.com/settings/tokens) with the `repos` permission. Then pass that as a `--githubtoken` argument when running the `npm run build` or `npm run serve` commands, for example:

```bash
npm run serve --githubtoken=xxxxxxxxxxxxxxxxx
```
