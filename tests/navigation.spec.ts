import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test.describe('Navigation Tests', () => {

    test('MORE link test', async ({ page }) => {
        await page.click('text=More');
        expect(page).toHaveURL(siteURL + '2/');
        expect(await page.locator('text=Previous')).toBeVisible();
        expect(await page.locator('text=Next')).toBeVisible();
        await page.click('text=Previous');
        expect(page).toHaveURL(siteURL);
    });

});
