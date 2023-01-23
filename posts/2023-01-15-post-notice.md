---
title: Post with notices or alert boxes
description: I want to display what notice boxes would look like.
tags:
 - notice

---

This post will show how to create different kinds of notice or alert boxes such as a regular box, as well as info, success, warning, and danger.

In all cases, use the paired shortcode `notice` with the notice type (info, success, warning, danger).  Leave the notice type out for the regular notice box.  You can use markdown inside.

{% notice %}
This is the default notice. You _can_ use Markdown.
{% endnotice %}



{% notice "info" %}
This is an info notice. Info means [information](https://en.wikipedia.org/wiki/Information)
{% endnotice %}


{% notice "success" %}
This is a success notice. Great Success.
{% endnotice %}


{% notice "warning" %}
This is a warning notice.  Don't use `GOTO` statements!
{% endnotice %}

{% notice "danger" %}
This is a danger notice. **Smoking is fatal**.
{% endnotice %}


For a regular notice box,

```
{% raw %}{% notice %}
This is the default notice. You _can_ use Markdown.
{% endnotice %}{% endraw %}
```

For an info notice box,

```
{% raw %}{% notice "info" %}
This is an info notice. Info means [information](https://en.wikipedia.org/wiki/Information)
{% endnotice %}{% endraw %}
```

For a success notice box,

```
{% raw %}{% notice "success" %}
This is a success notice. Great Success.
{% endnotice %}{% endraw %}
```

For a warning notice box,

```
{% raw %}{% notice "warning" %}
This is a warning notice.  Don't use `GOTO` statements!
{% endnotice %}{% endraw %}
```

For a danger notice box,

```
{% raw %}{% notice "danger" %}
This is a danger notice. **Smoking is fatal**.
{% endnotice %}{% endraw %}
```
