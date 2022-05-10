const path = require('path');
const { test, expect } = require('@playwright/test');

/* 高速化目的の実験
単一のブラウザーのインスタンスを使いまわしし以下の３つのテスト(スクリーンショットは４枚）を実施しようと思ったが、
test() 毎にブラウザーが立ち上げ直されてしまう。そのため高速化ができなかった。
*/
/*
test.describe('test', () => {
	test('devices', async ({ page }) => {
		//await page.goto(`file:${path.join(__dirname,'../../public/index.html')}`);
		await page.goto(`https://playwright.dev/`);
		expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`full_index.png`);	// full
		expect(await page.screenshot()).toMatchSnapshot(`firstview_index.png`); 			// firstview
	});

	test.use({ viewport: { width: 600, height: 900 } });
	test('viewports-portlait', async ({ page }) => {
		await page.goto(`https://playwright.dev/`);
		expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`landscape_index.png`);
	});

	test.use({ viewport: { width: 900, height: 600 } });
	test('viewports-landscape', async ({ page }) => {
		await page.goto(`https://playwright.dev/`);
		expect(await page.screenshot({fullPage:true})).toMatchSnapshot(`portlait_index.png`);
	});
});
*/

/*
一方、この方法では yan --dev add playwright が別途必要
また、おそらく古い時代のものであり、試せていない。

const playwright = require('playwright');

(async () => {
	//for (const browserType of ['chromium', 'firefox', 'webkit']) {
	for (const browserType of ['chromium']) {
		const browser = await playwright[browserType].launch()
		const context = await browser.newContext()
		const page = await context.newPage()
		await page.goto('http://playwright.dev/')
		await page.screenshot({ path: `images/${browserType}.png` })
		await browser.close()
	}
})()
*/
