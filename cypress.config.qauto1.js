const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
       baseUrl: 'https://qauto.forstudy.space/',

       env:{
                email: "nasta@lebediuk.com",
                password: "TestPassword123",
            },
  },

});