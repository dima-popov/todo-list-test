module.exports = async () => {
    return {
      verbose: true,
      testEnvironment: "jsdom",
      collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
      ],
      moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/src/fileMock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4)$":
          "<rootDir>/src/fileMock.js"
   },
    };
  };