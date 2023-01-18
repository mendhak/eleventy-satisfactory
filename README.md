# Mendhak's Eleventy Blog Theme [![Build and Publish Github Pages](https://github.com/mendhak/eleventy-mendhak-blog-theme/actions/workflows/staticsite.yml/badge.svg?branch=main)](https://github.com/mendhak/eleventy-mendhak-blog-theme/actions/workflows/staticsite.yml)

A blog theme I'm working on based on [11ty](https://github.com/11ty/eleventy).  I am planning to move over from Jekyll and minimal-mistakes, so I will need to build in some features first.

It's a simplified opinionated layout, the focus is on content first, and less on other things (such as the author, social, tags, dates, about me, etc).

So far I've made the following modifications:

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
* Image is written as figure, and has lightbox.
* Image galleries
* Change the code theme
* Removed tag listing pages, tags only get used in the HTML metadata
* Pagination on the page list and post list
* Notice boxes like info, warning, success, etc.
* A gist shortcode to add gist seamlessly as codeblocks on a page.
* Github Repo Card shortcode. 

## TODO

- Some more posts to flesh it out
- ~~A way of adding an image~~
- ~~A post with one image~~
- ~~An image with lightbox~~
- ~~Image can specify a half size and third size~~
- ~~A gallery of images~~
- ~~A gallery of images with lightbox?~~
- ~~A post with code samples~~
- ~~A post with a video~~
- ~~Github repo card - use px in the SVG heights, move CSS/JS into their own files, change gist's token to another name, ~~
- ~~Button to switch light/dark mode, persist in localStorage~~
- ~~Remove description from post view~~
- 'Usage guide' in the README
- ~~Docker Compose file~~
- Smashtests
- ~~Build badge~~
- ~~A notice/warning type panel~~
- ~~Github Action to build it~~
- ~~Github Gists, but not rubbish looking.~~
- ~~Remove /tags/ listing pages~~
- ~~Undo the dark/light mode toggle~~ - [Issue #2](https://github.com/mendhak/eleventy-mendhak-blog-theme/issues/2)
- ~~Use CSSMin to combine multiple CSS files in one go, instead of minifiying each file separately~~
- External links
- Drafts should not be published, but only visible locally.
- ~~Better expand the code samples page~~
- ~~[Add GITHUB_TOKEN](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) to authorization: bearer header for Gist fetch~~
- Refactor eleventy shortcodes into separate files

## Running it

Requires Node 18.

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

Or in docker compose:

```
docker-compose up
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
- [Article icon by Freepik](https://www.flaticon.com/free-icons/blog)
- [Paired shortcode](https://www.markllobrera.com/posts/eleventy-paired-shortcodes-and-markdown-rendering/)
- [Shortcode with image gallery](https://www.markllobrera.com/posts/eleventy-building-image-gallery-photoswipe/)
- [Customizing markdown-it](https://publishing-project.rivendellweb.net/customizing-markdown-it/)
