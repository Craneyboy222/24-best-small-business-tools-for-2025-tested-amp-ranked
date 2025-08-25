import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('User can register', async ({ page }) => {
    await page.goto('/register');
    await page.fill('#username', 'newuser');
    await page.fill('#email', 'newuser@example.com');
    await page.fill('#password', 'Password123');
    await page.click('text=Register');
    await expect(page).toHaveURL('/dashboard');
  });

  test('User can login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'existinguser');
    await page.fill('#password', 'Password123');
    await page.click('text=Login');
    await expect(page).toHaveURL('/dashboard');
  });

  test('Invalid login shows error', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('text=Login');
    await expect(page.locator('.error')).toHaveText('Invalid credentials');
  });
});