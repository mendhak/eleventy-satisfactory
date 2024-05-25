import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8080/eleventy-satisfactory/');
});

test.afterEach(async ({page}, testInfo) => {

    // Take a screenshot if the test failed
    if (testInfo.status !== testInfo.expectedStatus){
        const screenshotPath = testInfo.outputPath(`failure.png`);
        testInfo.attachments.push({name: 'Failure Screenshot', path: screenshotPath, contentType: 'image/png'});
        await page.screenshot({path: screenshotPath});
    }

});

test.describe('Home Page Tests', () => {

    test('Verify Location and Title', async ({ page}) => {
        await page.waitForSelector('header a');
        const header = await page.locator('header a').innerText();
        const pageUrl = page.url();
        expect(pageUrl).toBe('http://localhost:8080/eleventy-satisfactory/');
        expect(header).toBe('Eleventy Satisfactory');
    });

    test('Verify Footer Links', async ({ page }) => {
      await page.waitForSelector('footer');

      const githubLink = await page.locator('footer').first().locator("a").nth(0).getAttribute('href');
      expect(githubLink).toBe('https://github.com/mendhak/eleventy-satisfactory');

      const eleventyLink = await page.locator('footer').first().locator("a").nth(1).getAttribute('href');
      expect(eleventyLink).toBe('https://11ty.dev');

      const simpleCssLink = await page.locator('footer').first().locator("a").nth(2).getAttribute('href');
      expect(simpleCssLink).toBe('https://simplecss.org/');

      const rssFeedLink = await page.locator('footer').first().locator("a").nth(3).getAttribute('href');
      expect(rssFeedLink).toBe('/eleventy-satisfactory/feed.xml');

    });

    test('Flickr Photos', async ({ page }) => {
        await page.waitForSelector('ul.photostream a img');
        const photos = await page.locator('ul.photostream').locator('a img').count();
        expect(photos).toBe(5);
    });
});
