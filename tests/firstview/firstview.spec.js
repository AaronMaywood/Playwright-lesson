/*
ファーストビューのテストなので、fullPage:true を削除している。
	page.screenshot({fullPage:true})
	↓
	page.screenshot()
*/

const path = require('path');
const { test, expect } = require('@playwright/test');

test('firstview', async ({ page, browserName }) => {
	await page.goto('https://adjustacademy.com');
	expect(await page.screenshot()).toMatchSnapshot(`index.png`);
});

