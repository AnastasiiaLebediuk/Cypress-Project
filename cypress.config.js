const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
       baseUrl: 'https://qauto.forstudy.space/',
  },
  viewportWidth: 1500,
  viewportHeight: 1100,
});
