import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});



test.describe('Post with image gallery', () => {

    test('Clicking an image produces a lightbox', async ({ page }) => {
      await page.goto('post-with-a-gallery/');
      let clickableImages = await page.locator('figure a');
      clickableImages.nth(1).scrollIntoViewIfNeeded();
      clickableImages.nth(1).click();
      await expect(page.getByText('Second Image')).toBeVisible();

      await page.keyboard.press('Escape');

      await expect(page.getByText('Three Two images side by side')).toBeVisible();

      // get the image just above this
      let nearestImage = page.locator('figure a:near(:text("Three Two images side by side"))').last();
      nearestImage.scrollIntoViewIfNeeded();
      await expect(nearestImage).toBeVisible();
      await nearestImage.click();
      await expect(page.getByText('Second image')).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.getByText('Second image')).not.toBeVisible();

    });

});
