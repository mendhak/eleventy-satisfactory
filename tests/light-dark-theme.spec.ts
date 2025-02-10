import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test('Light and Dark Theme', async ({ page }) => {

  let articleContainer = await page.locator('body');
  await expect(articleContainer).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(articleContainer).toHaveCSS('background-color', 'rgb(51, 51, 51)');
  // sleep 5s
  await page.waitForTimeout(5000);

});
