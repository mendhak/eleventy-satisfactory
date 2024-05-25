import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});



test.describe('Post with third party media', () => {

      test('Third party media is visible', async ({ page }) => {
          await page.goto('post-with-iframes-videos-third-party/');
          let ytVideo = await page.locator('iframe[src="https://www.youtube.com/embed/9qOvG9KeJ6c"]');
          await expect(ytVideo).toBeVisible();

      });
});
