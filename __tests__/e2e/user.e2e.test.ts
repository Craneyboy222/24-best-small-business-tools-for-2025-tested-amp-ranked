import { test, expect } from '@playwright/test';

test.describe('User Profile', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'existinguser');
    await page.fill('#password', 'Password123');
    await page.click('text=Login');
  });

  test('User can view profile', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.locator('#username')).toHaveText('existinguser');
  });

  test('User can update profile', async ({ page }) => {
    await page.goto('/profile');
    await page.fill('#email', 'newemail@example.com');
    await page.click('text=Update Profile');
    await expect(page.locator('.success')).toHaveText('Profile updated');
  });

  test('User can see saved tools', async ({ page }) => {
    await page.goto('/profile/saved');
    await expect(page.locator('.tool-item')).toHaveCount(3);
  });
});