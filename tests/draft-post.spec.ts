import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});



test.describe('Draft Post Tests', () => {

      test('Verify Draft Post is only visible locally', async ({ page }) => {
          await page.getByRole('link', {name: 'This draft post should only appear locally', exact: true} ).click();
          expect(page).toHaveURL(siteURL + 'a-draft-post/');

          // Ensure the draft post is not visible on the live site
          await page.goto('https://code.mendhak.com/eleventy-satisfactory/a-draft-post/')
          expect(await page.locator('text=Content not found.')).toBeVisible();
      });

  });
