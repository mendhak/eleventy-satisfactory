# Mendhak's Eleventy Blog Theme

A blog starter using [11ty](https://github.com/11ty/eleventy) and [Simple.css](https://github.com/kevquirk/simple.css). Based on [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog).

It's a simplified opinionated layout, the focus is on content first, and less on other things (such as the author, social, tags, dates, about me, etc)

I've made the following modifications:

* The CSS is now inline in the page, instead of a link to a stylesheet.
* Make the headings permalinks
* Some color changes and font changes to resemble Hylia: yellowish links and Lora font
* Increase text size for readability, increase main body width
* Smaller header at the top of the page
* Simpler post list page with headings and shortened excerpts
* Moved date to bottom of article
* Removed tags
* External links and photos in the footer
* Removed site navigation, just use the 'external links'
* Copyright in the footer
* Opengraph tags generated for each page, including default image (see metadata.json)
* Flatten post URL to top level
* Favicon feature

## TODO

- Some more posts to flesh it out
- ~~A way of adding an image~~
- ~~A post with one image~~
- ~~An image with lightbox~~
- ~~Image can specify a half size and third size~~
- A gallery of images
- A gallery of images with lightbox?
- A post with code samples
- A post with a video
- Github repo card?
- Button to switch light/dark mode, persist in localStorage
- ~~Remove description from post view~~
- 'Usage guide' in the README
- Docker Compose file
- Smashtests
- A notice/warning type panel


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

## Usage

TBD



### Implementation Notes

- `posts/` has the blog posts
- The `css` and `img` directories in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file).
- The blog post feed template is in `feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.


##  References

- [Eleventy](https://www.11ty.dev/docs/)
- [Simple.css](https://github.com/kevquirk/simple.css/wiki)
- [Favicon created by Uniconlabs](https://www.flaticon.com/free-icons/website)
- [Blog icon created by BomSymbols](https://www.flaticon.com/free-icons/blog)
- [Paired shortcode](https://www.markllobrera.com/posts/eleventy-paired-shortcodes-and-markdown-rendering/)
- [Shortcode with image gallery](https://www.markllobrera.com/posts/eleventy-building-image-gallery-photoswipe/)
