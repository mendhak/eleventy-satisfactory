---
title: Post with some sample code
description: This post contains sample code blocks
date: 2023-01-05
tags:
  - eleventy
  - markdown
  - code

---

A post with some code samples. These are using the Prism CSS library.


## Basic code blocks

Any text that is indented by 4 spaces will be treated as a preformatted block.

    console.log("hello");

## Code blocks with syntax highlighting

To add code to a page with syntax highlighting, surround the code with 3 backticks followed by an optional language name.  
For example, ` ```javascript`, then add the code, and close the block with ` ``` `

Here is some Javascript

```javascript
//If there's a JWT header, parse it and decode and put it in the response
if (process.env.JWT_HEADER) {
  let token = req.headers[process.env.JWT_HEADER.toLowerCase()];
  if (!token) {
    echo.jwt = token;
  } else {
    token = token.split(" ").pop();
    const decoded = jwt.decode(token, {complete: true});
    echo.jwt = decoded;
  }
}

```

Similarly for C#, use ` ```csharp`

```csharp
static async Task<string> FindBucketLocationAsync(IAmazonS3 client)
{
    string bucketLocation;
    var request = new GetBucketLocationRequest()
    {
        BucketName = bucketName
    };
    GetBucketLocationResponse response = await client.GetBucketLocationAsync(request);
    bucketLocation = response.Location.ToString();
    return bucketLocation;
}
```


Have some  ` ```bash`

```bash
#!/usr/bin/env bash

set -euo pipefail

function message {
    echo ""
    echo "---------------------------------------------------------------"
    echo $1
    echo "---------------------------------------------------------------"
}

if ! [ -x "$(command -v jq)" ]; then
    message "JQ not installed. Installing..."
    sudo apt -y install jq
fi
```

