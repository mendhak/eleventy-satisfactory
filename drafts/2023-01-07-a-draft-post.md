---
title: This draft post should only appear locally
description: This should only be visible locally
tags: second tag

---

This post has been created in the `drafts` folder.  It should only appear when the eleventy server runs with `--watch` or `--serve`. 

In package.json, the start command has been given those flags, so drafts should appear when running via `npm run start`.  

In the docker-compose file from where this site runs, the command is `npm start`, so running via `docker-compose up` should show draft posts.  

Since `npm run build` doesn't have the flags, drafts will not appear in the production build. 
