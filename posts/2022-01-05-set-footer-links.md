---
title: Set footer images and links
extraWideMedia: false
---

How to set the links in the footer as well as the small thumbnails that appear. 

### Links

The links are controlled via the `_data/bottomlinks.json` file.  It's just an array of link URLs and the text to display.  

```json
[
  {
    "link": "https://example.com",
    "text": "Example"
  }
  ...
]

```

You can also link to relative paths.  

To remove the links in the footer, empty the array, or empty the file, or delete the file.  


### Photos

The photos are controlled in the `_data/photostream.json` file.  It's an array of thumbnails and the URL to link to.  

```json
[
  {
      "link": "https://www.flickr.com/photos/mendhak/30454355997/",
      "img": "https://live.staticflickr.com/1932/30454355997_287063f84b_q.jpg"
  },
  ...
```

To remove the images in the footer, empty the array, or empty the file, or delete the file.  
