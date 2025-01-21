const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      auth_token: ''
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'http://localhost:3000'
    },
  },
});
