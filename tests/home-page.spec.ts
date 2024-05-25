import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8080/eleventy-satisfactory/');
});

test.afterEach(async ({page}, testInfo) => {

    // Take a screenshot if the test failed
    if (testInfo.status !== testInfo.expectedStatus){
        const screenshotPath = testInfo.outputPath(`failure.png`);
        testInfo.attachments.push({name: 'Failure Screenshot', path: screenshotPath, contentType: 'image/png'});
        await page.screenshot({path: screenshotPath});
    }

});

test.describe('Home Page Tests', () => {

    test('Verify Title', async ({ page}) => {
        await page.waitForSelector('header a');
        const header = await page.locator('header a').innerText();
        const pageUrl = page.url();
        expect(pageUrl).toBe('http://localhost:8080/eleventy-satisfactory/');
        expect(header).toBe('Eleventy Satisfactory');
    });
});
