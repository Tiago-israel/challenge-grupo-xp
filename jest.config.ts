module.exports = {
    setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
    testEnvironment: "node",
    testMatch: [
        "**/**/*.test.js?(x)", "**/?(*.)+(spec|test).js?(x)"
    ],
    modulePaths: [
        "<rootDir>/src",
        "<rootDir>/node_modules"
    ],
    globals: {
        "NODE_ENV": "test"
    },
    verbose: true,
    moduleFileExtensions: [
        "js",
        "jsx",
        "json"
    ],
    transformIgnorePatterns: ["/node_modules/(?!(lodash-es|react)/)"], // <-- this allows babel to load only the node modules I need (which is lodash-es) and ignore the rest
    moduleNameMapper: {
        "aurelia-(.*)": "<rootDir>/node_modules/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/**/*.js?(x)",
        "src/reducers/**/*.js?(x)"
    ],
    coverageDirectory: "./coverage",
    coverageReporters: ["json", "lcov", "text"]
};