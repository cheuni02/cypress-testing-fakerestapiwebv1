import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://fakerestapi.azurewebsites.net",
    env: {
      testVar: "hotdog",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
