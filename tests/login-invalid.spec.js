const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login inválido exibe mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await page.screenshot({ path: 'screenshots/login-invalid-1-login-page.png', fullPage: true });

  await loginPage.login('standard_user', 'senha_errada');
  await page.screenshot({ path: 'screenshots/login-invalid-2-erro-login.png', fullPage: true });

  const errorText = await loginPage.getErrorText();
  await expect(errorText).toContain('Epic sadface');
  await page.screenshot({ path: 'screenshots/login-invalid-3-erro-visivel.png', fullPage: true });
});

