const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Login com sucesso redireciona para a página de produtos', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await page.screenshot({ path: 'screenshots/login-success-1-login-page.png', fullPage: true });

  await loginPage.login('standard_user', 'secret_sauce');
  await page.screenshot({ path: 'screenshots/login-success-2-pos-login.png', fullPage: true });

  await productsPage.assertOnProductsPage(expect);
  await page.screenshot({ path: 'screenshots/login-success-3-produtos.png', fullPage: true });
});

