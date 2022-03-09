const { test, expect } = require('@playwright/test');

test('screenshot', async ({ page, browserName }) => {
	await page.goto('https://playwright.dev/');
	await page.screenshot({ path: `tests/screenshots/${browserName}.png`, fullPage: true });
});
