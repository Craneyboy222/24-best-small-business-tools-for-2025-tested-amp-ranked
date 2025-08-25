import { chromium, expect } from '@playwright/test';

const baseURL = 'http://localhost:3000';

describe('Database End-to-End Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should allow a user to register and login', async () => {
    await page.goto(`${baseURL}/register`);
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await page.waitForNavigation();
    expect(page.url()).toBe(`${baseURL}/dashboard`);
  });

  // Additional e2e tests
});