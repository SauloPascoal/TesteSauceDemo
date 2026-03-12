const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('Adicionar produto ao carrinho após login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const productName = 'Sauce Labs Backpack';

  await loginPage.goto();
  await page.screenshot({ path: 'screenshots/add-to-cart-1-login-page.png', fullPage: true });

  await loginPage.login('standard_user', 'secret_sauce');
  await page.screenshot({ path: 'screenshots/add-to-cart-2-pos-login.png', fullPage: true });

  await productsPage.assertOnProductsPage(expect);
  await productsPage.addProductToCartByName(productName);
  await page.screenshot({ path: 'screenshots/add-to-cart-3-produto-adicionado.png', fullPage: true });

  await productsPage.goToCart();
  await page.screenshot({ path: 'screenshots/add-to-cart-4-carrinho.png', fullPage: true });

  await cartPage.assertProductInCart(expect, productName);
});

