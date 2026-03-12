const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    actionTimeout: 10 * 1000,
  },
  reporter: [['html', { open: 'never' }]],
});
