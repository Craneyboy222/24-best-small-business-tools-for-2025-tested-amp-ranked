import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Mobile Safari',
      use: { browserName: 'webkit', viewport: { width: 375, height: 667 } },
    },
  ],
};

export default config;