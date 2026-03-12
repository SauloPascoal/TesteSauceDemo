class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartLink = page.locator('.shopping_cart_link');
    this.inventoryItem = page.locator('.inventory_item');
  }

  async assertOnProductsPage(expect) {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCartByName(productName) {
    const product = this.inventoryItem.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });
    const addToCartButton = product.locator('button:has-text("Add to cart")');
    await addToCartButton.first().click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };
