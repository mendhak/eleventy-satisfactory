---
title: This draft post should only appear locally
description: This should only be visible locally
tags: second tag

---

This post has been created in the `drafts` folder.  It should only appear under certain conditions locally, but not in a production build.  

1. The file needs to be in the `drafts` folder. 
2. The `ELEVENTY_ENV=development` environment variable needs to be set.  

In the docker-compose file from where this site runs, the environment variable has been set, so running via `docker-compose up` should show draft posts.  

In package.json, the start command has been given the same environment variable, so drafts should appear when running via `npm run start`.  

Since `npm run build` doesn't have it, drafts will not appear in the production build. 
