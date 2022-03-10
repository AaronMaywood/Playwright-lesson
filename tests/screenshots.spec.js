const { test, expect } = require('@playwright/test');

test('screenshot', async ({ page, browserName }) => {
    // Vercel にデプロイしたProduction 環境のURL
	// https://vercel.com/aaronmaywood/playwright-lesson/settings/domains
	// から手に入る
	await page.goto('https://playwright-lesson.vercel.app/');
	// tests/screenshots/ 下に設置したscreenshot とVercel にデプロイした最新のものとを比べる
	expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`tests/screenshots/${browserName}.png`);
});
