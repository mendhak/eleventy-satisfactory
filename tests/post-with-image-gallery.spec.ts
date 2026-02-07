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
        clickableImages.nth(1).click();
        await expect(page.getByText('Second image')).toBeVisible();

        await page.keyboard.press('Escape');
        await expect(page.getByText('Second image')).not.toBeVisible();
    });

    test('Gallery with caption shows caption and lightbox', async ({ page }) => {
        await page.goto('post-with-a-gallery/');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        await expect(page.getByText('Three Two images side by side')).toBeVisible();

        let nearestImage = page.locator('figure a:near(:text("Three Two images side by side"))').last();
        nearestImage.scrollIntoViewIfNeeded();
        await expect(nearestImage).toBeVisible();
        await nearestImage.click();
        await expect(page.locator('div').getByText('Borgund Stave Church')).toBeVisible();
        
        await page.keyboard.press('Escape');
        await expect(page.locator('div').getByText('Borgund Stave Church')).not.toBeVisible();
    });

});
