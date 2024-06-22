import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('post-with-github-gists/');
    siteURL = baseURL;
});


test.describe('Post with Github Gist', () => {

  test('Github Gist is rendered seamlessly', async ({ page }) => {

    await expect(page.getByText('Hello, from Github Gist!')).toBeVisible();

    // await expect(page.waitForSelector('html body main article table thead tr th'))
    let tableSelector = page.locator('article table th').first();
    await expect(await tableSelector.innerText()).toBe('Option');
    await expect(tableSelector).toBeVisible();

  });

});
