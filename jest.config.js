/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  require: ['tests/bdd/**/*.steps.ts'],
  paths: ['tests/bdd/**/*.feature'],
  import: ['ts-node/register'],
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};