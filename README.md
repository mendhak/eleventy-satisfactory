# Mendhak's Eleventy Blog Theme

A blog starter using [11ty](https://github.com/11ty/eleventy) and [Simple.css](https://github.com/kevquirk/simple.css). Based on [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog).

Simplified layout without a lot of cruft.

I've made the following modifications:

* The CSS is now inline in the page, instead of a link to a stylesheet.
* Make the headings permalinks
* Some color changes and font changes to resemble Hylia: yellowish links and Lora font
* Increase text size for readability, increase main body width, simpler layout
* Smaller header
* Simpler post list page with headings and shortened excerpts
* External links and flickr photos in the footer
* Copyright in the footer


## TODO

The posts aren't appearing in date order, why is that?


## Running it


```
npm install
npx @11ty/eleventy
```

Or build and host locally for local development, refreshes when template changes:

```
npm install
npx @11ty/eleventy --serve --watch
```

Or in debug mode:

```
DEBUG=* npx @11ty/eleventy
```

## Documentation

- [Eleventy](https://www.11ty.dev/docs/)
- [Simple.css](https://github.com/kevquirk/simple.css/wiki)

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
- Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
- The `css` and `img` directories in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file).
- The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.

