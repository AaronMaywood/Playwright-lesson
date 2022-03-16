// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
	toMatchSnapshot: {
	  maxDiffPixels: 100,
	  threshold: 0.3,
	}
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
	/* 各デバイスごとのテスト - full page */
    {
      name: 'chromium',
      testDir: './tests/devices',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      testDir: './tests/devices',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      testDir: './tests/devices',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      testDir: './tests/devices',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      testDir: './tests/devices',
      use: {
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'small',
      testDir: './tests/devices',
      use: {
        ...devices['iPhone SE'],
      },
    },
    {
      name: 'small-landscape',
      testDir: './tests/devices',
      use: {
        ...devices['iPhone SE landscape'],
      },
    },
    {
      name: 'High Device-Pixel-Ratio x3',
      testDir: './tests/devices',
      use: {
        ...devices['iPhone X'],
      },
    },
	/* 各デバイスごとのテスト - first view */
    {
      name: 'webkit',
      testDir: './tests/firstview',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'small',
      testDir: './tests/firstview',
      use: {
        ...devices['iPhone SE'],
      },
    },
    {
      name: 'small-landscape',
      testDir: './tests/firstview',
      use: {
        ...devices['iPhone SE landscape'],
      },
    },
    /* Viewport 毎のテスト
	
	MEMO: Bootstrap に見るブレークポイントの種類
	https://getbootstrap.jp/docs/5.0/layout/breakpoints/
		X-Small				< 576px
		Small				≥576px
		Medium				≥768px
		Large				≥992px
		Extra large			≥1200px
		Extra extra large	≥1400px
	*/
    {
      name: 'chromium-sm',
      testDir: './tests/viewports',
      use: {
        ...devices['Desktop Chrome'],
		viewport: { width: 320, height: 720 },
      },
    },
    {
      name: 'chromium-xlg',
      testDir: './tests/viewports',
      use: {
        ...devices['Desktop Chrome'],
		viewport: { width: 1280, height: 720 },
      },
    },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
