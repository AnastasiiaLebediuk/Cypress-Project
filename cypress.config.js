const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://qauto.forstudy.space/",
     watchForFileChanges: false,
    // setupNodeEvents(on, config) {},
    //    reporter: "mochawesome",
    // reporterOptions: {
    //   reportDir: "cypress/reports",
    //   overwrite: false,
    //   html: true,
    //   json: true,
    // },
  },

  viewportWidth: 1500,
  viewportHeight: 1100,
});
