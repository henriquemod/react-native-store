module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|ts|tsx|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/"],

  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@rneui|@react-native/polyfills)",
  // ],
  testMatch: ["**/src/**/*.spec.ts?(x)"],
  testEnvironment: "node",
  moduleNameMapper: {
    "src/(.+)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageProvider: "babel",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
};
