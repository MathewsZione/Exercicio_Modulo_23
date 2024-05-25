const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "j23hna",
  e2e: {
   env: {
      minhaConta:"http://lojaebac.ebaconline.art.br/minha-conta/",
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      reportFilename: "index.html",
      overwrite: false,
      html: true,
      json: false
    },
  },
  
});
