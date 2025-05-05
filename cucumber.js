module.exports = {
  default: {
    require: ["features/**/*.steps.ts"],
    format: ["progress"],
    paths: ["features/bdd/**/*.feature"],
    import: ['ts-node/register'],
    parallel: 0,
  }
}

