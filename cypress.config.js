const { defineConfig } = require('cypress');

module.exports = defineConfig({
    redirectionUrl: 'https://sweetshop.netlify.app/',
    viewportWidth: 1792,
    viewportHeight: 1120,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 20000,
    retries: {
        runMode: 0,
        openMode: 0
    },
    e2e: {
        baseUrl: 'https://sweetshop.netlify.app/',
        specPattern: 'cypress/tests/*.{spec.js,jsx,ts,tsx}'
    }
});
