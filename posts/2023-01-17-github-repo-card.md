---
title: Github Repo Card
description: Widget to showcase a single repo

---

Display a Github repo card.  Fetches the description, stars and forks.  

<style>
  .github-repo-card {
    --gh-bg-color: #fff;
    --gh-color: #586069;
    --gh-heading-color: #0366d6;
    font-family: var(--sans-font);
    width: 50%;
    background-color: var(--gh-bg-color) !important;
    border: 1px solid var(--gh-color) !important;
    border-radius: 6px !important;
    padding: 16px !important;
    color: var(--gh-color) !important;
}

@media (prefers-color-scheme: dark) {
  .github-repo-card {
    --gh-bg-color: #212224;
    --gh-color: #8b949e;
    --gh-heading-color: #58a6ff;
  }
}

.github-repo-card svg {
  fill: var(--gh-color);
}

.github-repo-card .d-flex {
    display: flex !important;
    margin-bottom: 4px !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
}

.github-repo-card a { 
    color: var(--gh-heading-color) !important;
}

.github-repo-card .stats-icons a {
    display: inline-block !important;
    margin-right: 24px !important;
    color: var(--gh-color) !important;
    font-size: 0.95rem !important;
}

.github-repo-card .github-repo-text {
    color: var(--gh-color) !important;
    font-size: 1rem;
    display: flex !important;
    white-space: normal !important;
    margin-bottom: 8px !important;
}

.github-repo-card .github-repo-title {
  font-weight: bolder;
}


/* 


.github-repo-card .github-repo-text {
    color: #586069 !important;
    font-size: 14px;
    line-height: 21px;
    display: flex !important;
    white-space: normal !important;
    margin-bottom: 8px !important;
}

.github-repo-card .stats-icons {
    font-size: 12px !important;
}

.github-repo-card .stats-icons a {
    display: inline-block !important;
    margin-right: 24px !important;
    color: #586069 !important;
}

.github-repo-card .gh-icon {
    margin-right: 4px !important;
}  */
</style>

<div class="github-repo-card ">
<div class="d-flex">

<a class="github-repo-title" href="">
<svg height="1.7rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg><span> mendhak /</span>
gpslogger
</a>
</div>
<div class="github-repo-text">Description goes here.  It's a pretty long description lol. Should I continue typing? </div>
<div class="stats-icons">
<a href="/stargazers"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg> 55
</a>
<a href="/network/members" ><svg class="branches" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 384 512"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"/></svg> 22
</a>

</div>
</div> 