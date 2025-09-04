import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/tests',

  reporter: [
    [
      'allure-playwright',
      {
        environmentInfo: {
          //node_version: process.version,
        },
        resultsDir: 'playwright-report',
      },
    ]
  ],

  use: {
    baseURL: 'https://playwright.dev',
    locale: 'ru',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: {
      mode: 'on-first-retry',
    },

    video: {
      mode: 'retain-on-failure',
    },

    screenshot: {
      mode: 'only-on-failure',
    },
  },

  outputDir: 'test-results/',
};

export default config;
