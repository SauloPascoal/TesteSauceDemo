class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.cartItemName = this.cartItem.locator('.inventory_item_name');
  }

  async assertProductInCart(expect, productName) {
    await expect(this.cartItemName).toContainText(productName);
  }
}

module.exports = { CartPage };
