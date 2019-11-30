const { pathsToModuleNameMapper } = require("ts-jest/utils");
const path = require("path");
const prj_name = process.argv[process.argv.length - 1];
const { compilerOptions } = require(`./src/${prj_name}/tsconfig`);
module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  rootDir: __dirname,
  roots: [`<rootDir>/src/${prj_name}`],
  moduleDirectories: ["node_modules", path.join(__dirname, "src", prj_name)],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: `./coverage/${prj_name}/`,
  collectCoverageFrom: [
    `<rootDir>/src/${prj_name}/**/*.ts`,
    `!<rootDir>/src/${prj_name}/**/*.d.ts`,
    `!<rootDir>/src/${prj_name}/**/*.spec.ts`,
    `!<rootDir>/src/${prj_name}/**/*.test.ts`,
    `!<rootDir>/src/${prj_name}/**/__*__/*`,
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '__server_tests__/',
  ],
  setupFiles: ["raf/polyfill"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  // setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts",
  moduleNameMapper: {
    // module must come first
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./style-mock.js")
    // can also map files that are loaded by webpack with the file-loader
  },
  // moduleNameMapper: pathsToModuleNameMapper(
  //   compilerOptions.paths, { prefix: `<rootDir>/src/${prj_name}` }
  // ),
  cacheDirectory: `<rootDir>/${prj_name}/.cache/unit`,
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: `./src/${prj_name}/tsconfig.json`
    }
  }
};
