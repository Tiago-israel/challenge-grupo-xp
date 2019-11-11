module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
  moduleNameMapper: {
    "aurelia-(.*)": "<rootDir>/node_modules/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/mocks/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/src/tests/mocks/styleMock.js"
  }
};
