const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login inválido exibe mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'senha_errada');

  const errorText = await loginPage.getErrorText();
  await expect(errorText).toContain('Epic sadface');
});

