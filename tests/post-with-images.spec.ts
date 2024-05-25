import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


/*
Navigate to '{baseUrl}/eleventy-satisfactory/post-with-an-image/'

On post {
props({
'Clickable Image': `figure a`,
'Lightbox': `.sl-wrapper`
})
}

Scroll To '1st Clickable Image'

Click '1st Clickable Image'

Verify 'Lightbox' is visible

Verify at page '{baseUrl}/eleventy-satisfactory/post-with-an-image/'

Type '[Escape]' into 'Lightbox'

Scroll To '3rd Clickable Image'

Wait '5' secs

Click '3rd Clickable Image'

Verify 'Lightbox' is visible

Verify at page '{baseUrl}/eleventy-satisfactory/post-with-an-image/'

*/

test.describe('Post with images', () => {

    test('Clicking an image produces a lightbox', async ({ page }) => {
      await page.goto('post-with-an-image/');
      let clickableImages = await page.locator('figure a');
      clickableImages.nth(0).scrollIntoViewIfNeeded();
      await clickableImages.nth(0).click();
      let lightbox = await page.locator('.sl-wrapper');
      await expect(lightbox).toBeVisible();

      // Ensure the URL is reset when lightbox is closed
      expect.soft(await page).toHaveURL('post-with-an-image/#pid=1');
      await page.keyboard.press('Escape');
      expect(lightbox).not.toBeVisible();
      expect(await page).toHaveURL(siteURL + 'post-with-an-image/');

      clickableImages.nth(2).scrollIntoViewIfNeeded();
      await clickableImages.nth(2).click();
      await expect(lightbox).toBeVisible();
      await page.keyboard.press('Escape');
      expect(await page).toHaveURL(siteURL + 'post-with-an-image/');
    });
});
