import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test.describe('Post with notice block', () => {

      test('Notice block is visible', async ({ page }) => {
          await page.goto('post-notice/');
          let noticeBlock = await page.locator('.notice.success');
          await expect(noticeBlock).toBeVisible();
          await expect(await noticeBlock.innerText()).toBe('This is a success notice. Great Success.');
          await expect(noticeBlock).toHaveCSS('background-color', 'rgb(217, 237, 217)');
      });
});
