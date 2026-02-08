import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});



test.describe('Post with image gallery', () => {

    test('Clicking an image produces a lightbox', async ({ page }) => {
        await page.goto('post-with-a-gallery/');
        let clickableImages = await page.locator('figure span');
        clickableImages.nth(1).click();
        await expect(page.locator("div.sl-caption").getByText('Second alt text')).toBeVisible();
        
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        await expect(page.locator("div.sl-caption").getByText('Second alt text')).not.toBeVisible();
    });

    test('Gallery with caption shows caption and lightbox', async ({ page }) => {
        await page.goto('post-with-a-gallery/');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        await expect(page.getByText('Three Two images side by side')).toBeVisible();

        let nearestImage = page.locator('figure span:near(:text("Three Two images side by side"))').last();
        nearestImage.scrollIntoViewIfNeeded();
        await expect(nearestImage).toBeVisible();
        await nearestImage.click();
        await expect(page.locator('div').getByText('Photo of a dark stave church in Norway')).toBeVisible();
        
        await page.keyboard.press('Escape');
        await expect(page.locator('div').getByText('Photo of a dark stave church in Norway')).not.toBeVisible();
    });

});
