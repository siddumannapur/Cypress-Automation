const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//for html reports
  screenshotOnRunFailure: true,
  //video:true,
  //trashAssetsBeforeRuns:false,
  retries: {
    runMode: 2,
    openMode: 1,
    },
    reporterOptions:{
      reportFilename:"[status]_[datetime]-report",
      timestamp:"longDate",
      charts:true,
      embededScreenshots:true,
      inlineAssets:true,
      saveAllAttempts:false,
      // ignoreVideos:true,
      // videoOnFailOnly:false
    },

  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);//for html reporter
    },
  },
});

