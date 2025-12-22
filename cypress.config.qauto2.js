const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
       baseUrl: 'https://qauto2.forstudy.space',

        env:{
          email: "test+444@test.com",
          password: "Test@123",
        },
  },
  
});