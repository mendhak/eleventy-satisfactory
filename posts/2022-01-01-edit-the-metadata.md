---
title: Set up the metadata.json 
---

The [metadata.json file](https://github.com/mendhak/eleventy-mendhak-blog-theme/blob/main/_data/metadata.json) contains various configuration items that are needed to set up the blog. It controls things like title, URLs, tags, feeds, and some links. The `metadata.json` file is located under [`_data/metadata.json`](https://github.com/mendhak/eleventy-mendhak-blog-theme/blob/main/_data/metadata.json)

Starting with the important ones. 

### title

The site title that appears in the header. eg, "Joe's Blog"

### url

The Base URL where this site will be published. It gets used to construct the full URL to content, in the [sitemap.xml](/sitemap.xml), [feed.xml](/feed.xml), [feed.json](/feed.json), and the OpenGraph headers in the HTML `<head>`.  

Examples: 

* `https://username.github.io/` 
* `https://example.com/blog/`

### pathPrefix

Very important. The path where the blog will sit under its domain.  

Examples:

- `/blog/` if it's hosted on 'https:\//example.com/blogs'
- `/` if it's hosted on 'https:\//example.com'

This value gets used to construct and correct various URLs throughout all content, such as images, links, stylesheets, etc.  

### homePageItems

The number of posts to show on the main page of the blog.  


## Optional, but useful

### description

Sets the site description in the HTML head's meta and OpenGraph descriptions, as well as the JSON and Atom feed. 
If a blog post doesn't contain a `description:` frontmatter, this value gets used as a default in the HTML head. 


### tags

Sets the site's tags in the HTML head's meta keywords and OpenGraph tags. 
If a blog post doesn't contain a `tags:` frontmatter, these values get used as a default in the HTML head. 


### language

Sets the HTML `lang` of the web page. It helps search engines and browsers. 

### favicon

Path to the favicon.  Add your own image to the `/assets/images/` folder and update the location. 


### feed.path

The path where the Atom feed should be written to. 

### jsonfeed.path

The path where the JSON feed should be written to. 

### author

`name`: The author pseudonym or name that should appear in the HTML meta as well as the site's footer.   
`email`: The author email that should appear in the Atom feed.  
`url`: The URL that should appear in the Atom feed.  

### opengraph

Some opengraph settings. 

`image`: The image to use when an OpenGraph preview is being made for a URL on this site.  If a blog post doesn't have a `opengraph.image` frontmatter, then this default image gets used instead.  
`type`: The OpenGraph content type of this content.  It's a blog so, it's an article.  




