import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});

test.describe('Robots and Feeds and Well Known Tests', () => {
  test('Verify Robots.txt', async ({ page }) => {
    await page.goto('robots.txt');
    expect(page).toHaveURL(siteURL + 'robots.txt');
    expect(await page.textContent('*')).toContain('Allow: /');
    expect(await page.textContent('*')).toContain('Sitemap: ');
    expect(await page.textContent('*')).toMatch(/Sitemap: .+sitemap.xml/);
  });

  test('Verify Atom Feed' , async ({ page }) => {
    await page.goto('feed.xml');
    expect(page).toHaveURL(siteURL + 'feed.xml');
    expect(await page.textContent('*')).toContain('Eleventy Satisfactory');
  });

  test('Verify JSON feed', async ({ page }) => {
    await page.goto('feed.json');
    expect(page).toHaveURL(siteURL + 'feed.json');
    let feedJSON = JSON.parse(await page.innerText('*'));
    expect(feedJSON.title).toBe('Eleventy Satisfactory');
  });


  test('Verify .well-known URL', async ({ page }) => {
    await page.goto('.well-known/example.json');
    expect(page).toHaveURL(siteURL + '.well-known/example.json');
    let wellKnown = (await page.innerText('*'));
    let wellKnownJSON = JSON.parse(wellKnown);
    expect(wellKnownJSON.eleventy).toBe('satisfactory');
  });


});
