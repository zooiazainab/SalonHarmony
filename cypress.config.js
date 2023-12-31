const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3500',
    specPattern: 'test/**/*.cy.{js,jsx,ts,tsx}',
  },
})
