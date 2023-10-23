const { test, expect } = require('@playwright/test')

// test('First Playwright test', async function () {

// });

test('First Playwright test', async ({ browser, page }) => {
    // chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = (await context).newPage();

    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});


test('Second Playwright test', async ({ browser, page }) => {
    // chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = (await context).newPage();

    await page.goto("https://www.glassdoor.co.in/Community/salary-discovery");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});