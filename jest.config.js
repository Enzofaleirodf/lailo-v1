const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/**/*.(test|spec).{js,jsx,ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/e2e/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!**/*.config.{js,ts}",
    "!**/e2e/**",
  ],
}

module.exports = createJestConfig(customJestConfig)
