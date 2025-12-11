import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/tests',

  reporter: [
    process.env.CI ? ['github'] : ['list'],
    [
      'allure-playwright',
      {
        environmentInfo: {
          'playwright': '1.56.1',
          'allure-playwright': '3.4.3'
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
      mode: 'on',
    },

    video: {
      mode: 'on',
    },

    screenshot: {
      mode: 'on',
    },
  },

  outputDir: 'test-results/',
};

export default config;
