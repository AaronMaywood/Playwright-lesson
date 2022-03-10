const path = require('path');
const { test, expect } = require('@playwright/test');

test('screenshot', async ({ page, browserName }) => {
	await page.goto(`file:${path.join(__dirname,'../public/index.html')}`);
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`index.png`);
});
