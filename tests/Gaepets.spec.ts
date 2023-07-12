import { test, expect } from '@playwright/test';

test.describe('End-to-End Flow', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('should register, login, create, edit, and remove pet data, and logout', async () => {
    // Register
    await page.click('text=Admin');
    await page.click('text=Register here');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="email"]', 'john@gmail.com');
    await page.fill('input[name="password"]', 'John123@8');
    await page.click('text=Submit');
    await expect(page).toHaveURL(/.*register/);

    // Login
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'Ad123min');
    await page.click('text=Submit');
    await expect(page).toHaveURL(/.*login/);

    // Create Pet Data
    await page.click('text=Add Pet');
    await page.fill('input[name="name"]', 'Fluffy');
    await page.fill('input[name="service"]', 'Grooming');
    await page.fill('input[name="ownerName"]', 'John Doe');
    await page.click('text=Save');
    await expect(page).toHaveURL(/.*list/);

    // Edit Pet Data
    await page.click(`text=Edit`);
    await page.fill('input[name="name"]', 'New Fluffy');
    await page.fill('input[name="service"]', 'New Service');
    await page.fill('input[name="ownerName"]', 'New Owner');
    await page.click('text=Update Pet');
    await expect(page).toHaveURL(/.*list/);

    // Remove Pet Data
    await page.click(`text=Delete`);
    await page.click('text=Yes');
    await expect(page).toHaveURL(/.*list/);

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });
});