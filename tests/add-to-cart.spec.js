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
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.assertOnProductsPage(expect);
  await productsPage.addProductToCartByName(productName);
  await productsPage.goToCart();

  await cartPage.assertProductInCart(expect, productName);
});

