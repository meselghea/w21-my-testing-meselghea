import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://gae-petssalon.meselghea.site/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/.*Welcome to/i);
});

test('get started link', async ({ page }) => {
  await page.goto('https://gae-petssalon.meselghea.site/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Admin' }).click();
 
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
});
