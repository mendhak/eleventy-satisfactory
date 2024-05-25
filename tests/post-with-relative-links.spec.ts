import { test, expect, Page } from '@playwright/test';

let siteURL;

test.beforeEach(async ({page, baseURL}) => {
    await page.goto('/');
    siteURL = baseURL;
});


test.describe('Posts with relative links', () => {

  test('Test a link using a markdown path', async ({ page }) => {
    await page.goto('posting-links/');
    let link = await page.getByRole('link', { name: 'Link using Markdown path', exact: true });
    await link.click();
    expect(page.url()).toBe(siteURL + 'customary-lorem-ipsum/');

    await page.goBack();

    link = await page.getByRole('link', { name: 'Link using Markdown path and heading anchor', exact: true });
    await link.click();
    expect(page.url()).toBe(siteURL + 'customary-lorem-ipsum/#tincidunt-arcu-non-sodales');

    await page.goBack();

    link = await page.getByRole('link', { name: 'Link using root-relative URL', exact: true });
    await link.click();
    expect(page.url()).toBe(siteURL + 'customary-lorem-ipsum/');

    await page.goBack();

    link = await page.getByRole('button', { name: 'Button with a link', exact: true });
    await link.click();
    expect(page.url()).toBe(siteURL );


  });
});
