const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   env: {
      minhaConta:"http://lojaebac.ebaconline.art.br/minha-conta/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
