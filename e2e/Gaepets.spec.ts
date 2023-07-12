import { test, expect } from '@playwright/test';

test.describe('End-to-End Flow', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://gae-petssalon.meselghea.site/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('should register, login, create, edit, and remove pet data, and logout', async () => {
    // Register
    await page.goto('https://gae-petssalon.meselghea.site/');
    await page.click('text=Admin');
    await page.click('text=Register here');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="email"]', 'john@gmail.com');
    await page.fill('input[name="password"]', 'John1234');
    await page.click('text=Submit');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForURL('https://gae-petssalon.meselghea.site/login');

    // Login
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'Ad123min');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForURL('https://gae-petssalon.meselghea.site/list');
   
    // Create Pet Data
    await page.click('text=Add Pet');
    await page.fill('input[name="name"]', 'Fluffy');
    await page.fill('input[name="service"]', 'Basic');
    await page.fill('input[name="ownerName"]', 'John Doe');
    await page.getByRole('button', { name: 'Add Pet' }).click();
    await page.waitForURL('https://gae-petssalon.meselghea.site/list');

    // Edit Pet Data
    await page.click(`text=✎`);
    await page.fill('input[name="name"]', 'Ball');
    await page.fill('input[name="service"]', 'Basic');
    await page.fill('input[name="ownerName"]', 'John Doe');
    await page.getByRole('button', { name: 'Update Pet' }).click();
    await page.waitForURL('https://gae-petssalon.meselghea.site/list');

    // Remove Pet Data
    await page.click(`text=x`);
     await page.waitForURL('https://gae-petssalon.meselghea.site/list');

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });
});