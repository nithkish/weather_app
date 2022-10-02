module.exports = {
  testMatch: ["**/test/**/*.[jt]s", "**/?(*.)+(spec|test).[jt]s"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
