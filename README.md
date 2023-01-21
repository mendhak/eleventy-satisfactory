# Mendhak's Eleventy Blog Theme [![Build and Publish Github Pages](https://github.com/mendhak/eleventy-mendhak-blog-theme/actions/workflows/staticsite.yml/badge.svg?branch=main)](https://github.com/mendhak/eleventy-mendhak-blog-theme/actions/workflows/staticsite.yml)

A blog theme I'm working on based on [11ty](https://github.com/11ty/eleventy).  I am planning to move over from Jekyll and minimal-mistakes, so I will need to build in some features first.

My focus is on content first, and less on everything else (such as the author, social, tags, dates, about me, etc).

## TODO

- Add link rel sitemap link to sitemap.xml
- robots.txt, also with `Sitemap: https://code.mendhak.com/sitemap.xml`
- Can the simplelightbox code be moved to a Nunjucks template
- Can the cssmin shortcode adjust the inline url() paths? 


Pending some posts on: 
How to set the date of a post, 
How to set opengraph header, 
How to set the bottom links, 
How to set the photo stream, 
How to create a standalone page,


## Running it with Docker

To serve the site in Docker, and watch for changes:

```
docker-compose up
```

This will do the npm install and npm start. 

Then browse to http://localhost:8080/


## Running it with Node

Requires Node 18. First get all the dependencies. 

```
npm install
```

### Serve the site

To serve the site, and watch for changes: 

```
npm run start
```

Then browse to http://localhost:8080/


## Build the site

To just build the site once (normally used for Github Actions): 

```
npm install
npm run build
```


## How to use

### Configuration

- [Set up the metadata.json file](https://code.mendhak.com/eleventy-mendhak-blog-theme/edit-the-metadata/)


### Write a post

The posts go in the `posts` folder.  Drafts can go in the `drafts` folder and will only appear when running locally (`npm run start` or `docker-compose up`) but not when building (`npm run build`). 

- [Add an image](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-with-an-image/) 
- [Or an image gallery](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-with-a-gallery/)
- [Link to another post or URL](https://code.mendhak.com/eleventy-mendhak-blog-theme/posting-links/)
- [Add a Github Gist](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-with-github-gists/)
- [Add a Github Repo Card](https://code.mendhak.com/eleventy-mendhak-blog-theme/github-repo-card/)   
- [Add a notice panel with info, warning, success, danger](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-notice/)
- [Add a code sample](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-with-code/)
- [Add videos and audio](https://code.mendhak.com/eleventy-mendhak-blog-theme/post-with-iframes-videos-third-party/)




## Implementation Notes

- `posts/` has the blog posts
- The `css` and `images` directories in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file).
- The blog post feed template is in `feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.

### My changes from the eleventy base starter

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
* Links are adjusted to include the blog prefix (/post-url or filename.md)
* Change the code theme
* Removed tag listing pages, tags only get used in the HTML metadata
* Pagination on the page list and post list
* Notice boxes like info, warning, success, etc.
* A gist shortcode to add gist seamlessly as codeblocks on a page.
* Github Repo Card shortcode. 
* Ability to create draft posts


##  References

- [Eleventy](https://www.11ty.dev/docs/)
- [Simple.css](https://github.com/kevquirk/simple.css/wiki)
- [Favicon created by Uniconlabs](https://www.flaticon.com/free-icons/website)
- [Article icon by Freepik](https://www.flaticon.com/free-icons/blog)
- [Paired shortcode](https://www.markllobrera.com/posts/eleventy-paired-shortcodes-and-markdown-rendering/)
- [Shortcode with image gallery](https://www.markllobrera.com/posts/eleventy-building-image-gallery-photoswipe/)
- [Customizing markdown-it](https://publishing-project.rivendellweb.net/customizing-markdown-it/)
