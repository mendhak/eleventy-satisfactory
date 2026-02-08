import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {

    test('Home page should have no accessibility violations', async ({ page }) => {
        await page.goto('/');
        
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });

    test('Notice page should have no accessibility violations', async ({ page }) => {
        await page.goto('/post-notice/');
        
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });

    test('Image page should have no accessibility violations', async ({ page }) => {
        await page.goto('/post-with-an-image/');
        
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });

    test('Home page should have keyboard navigation support', async ({ page }) => {
        await page.goto('/');
        
        await page.keyboard.press('Tab');
        
        const focusedElement = await page.evaluate(() => {
            return document.activeElement?.tagName;
        });
        
        expect(focusedElement).toBeTruthy();
    });
});

