const path = require('path');
const { test, expect } = require('@playwright/test');

test('viewports', async ({ page, browserName }) => {
	await page.goto('https://adjustacademy.com');
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`index.png`);
});
