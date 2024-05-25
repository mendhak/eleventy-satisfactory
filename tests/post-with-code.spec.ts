import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test.describe('Post with code blocks', () => {
  test('Code blocks are syntax highlighted', async ({ page }) => {
    await page.goto('post-with-code/');
    let codeBlocks = await page.locator('pre.language-javascript');
    await expect(codeBlocks).toBeVisible();
    await expect(codeBlocks).toHaveCSS('background-color', 'rgb(43, 43, 43)');
  });
});
