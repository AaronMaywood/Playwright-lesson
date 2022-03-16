const path = require('path');
const { test, expect } = require('@playwright/test');

test('devices', async ({ page, browserName }) => {
	await page.goto(
		`file:${path.join(__dirname,'../../public/index.html')}`,
		{ waitUntil: 'networkidle' }
	);
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`index.png`);
});

