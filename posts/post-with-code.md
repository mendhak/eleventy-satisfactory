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

Here is some C#

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


Here is some Bash

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


