// tests/login.spec.js
// ============================================================
// LAB 03 - Tests automatisés avec GitHub Actions
// ISTQB Foundation Level - Fondamentaux des tests
// ============================================================

const { test, expect } = require('@playwright/test');

// URL de l'application de test
const LOGIN_URL = 'https://the-internet.herokuapp.com/login';

// Données de test
const VALID_USERNAME = 'tomsmith';
const VALID_PASSWORD = 'SuperSecretPassword!';

// ============================================================
// TC-LOGIN-001 - Test de login valide (Test Positif)
// ============================================================
test('TC-LOGIN-001 - login valide', async ({ page }) => {
  await page.goto(LOGIN_URL);
  await page.fill('#username', VALID_USERNAME);
  await page.fill('#password', VALID_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

// ============================================================
// TC-LOGIN-002 - Test de login avec password incorrect
// ============================================================
test('TC-LOGIN-002 - password incorrect', async ({ page }) => {
  await page.goto(LOGIN_URL);
  await page.fill('#username', VALID_USERNAME);
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your password is invalid!');
});

// ============================================================
// TC-LOGIN-003 - Test de login avec username incorrect
// ============================================================
test('TC-LOGIN-003 - username incorrect', async ({ page }) => {
  await page.goto(LOGIN_URL);
  await page.fill('#username', 'invaliduser');
  await page.fill('#password', VALID_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});

// ============================================================
// TC-LOGIN-004 - Test de login avec champs vides
// ============================================================
test('TC-LOGIN-004 - champs vides', async ({ page }) => {
  await page.goto(LOGIN_URL);
  // Ne pas remplir les champs
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
