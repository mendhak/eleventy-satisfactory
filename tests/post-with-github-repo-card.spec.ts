import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('github-repo-card/');
    siteURL = baseURL;
});


test.describe('Post with Github Repo Card', () => {

  test('Repo Card is rendered with description', async ({ page }) => {

    await expect(page.getByText('Lightweight GPS Logging Application For Android')).toBeVisible();

    let sendLocator = page.getByText('mozilla/send');
    const mozillaSendCount = await sendLocator.count();
    await expect(mozillaSendCount).toBe(2);

  });

});
