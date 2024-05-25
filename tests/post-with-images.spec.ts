import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test.describe('Post with images', () => {

    test('Clicking an image produces a lightbox', async ({ page }) => {
      await page.goto('post-with-an-image/');
      let clickableImages = await page.locator('figure a');
      clickableImages.nth(0).scrollIntoViewIfNeeded();
      await clickableImages.nth(0).click();
      let lightbox = await page.locator('.sl-wrapper');
      await expect(lightbox).toBeVisible();

      // Ensure the URL is reset when lightbox is closed
      expect(await page).toHaveURL('post-with-an-image/#pid=1');
      await page.waitForTimeout(200);
      await page.keyboard.press('Escape');
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
      expect(lightbox).not.toBeVisible();
      expect(await page).toHaveURL(siteURL + 'post-with-an-image/');

      clickableImages.nth(2).scrollIntoViewIfNeeded();
      await clickableImages.nth(2).click();
      await expect(lightbox).toBeVisible();
      await page.keyboard.press('Escape');
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
      expect(await page).toHaveURL(siteURL + 'post-with-an-image/');
    });
});
