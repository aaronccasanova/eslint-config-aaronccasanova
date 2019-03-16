module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|vue)': [
      'eslint --fix',
      'prettier --write',
      // Note: add this to indivual package's lint-staged config
      // 'jest --findRelatedTests',
      'git add',
    ],
    // TODO: Look into running the linter globs synchronously
    // the first without JSON for eslint, and prettier / git add for the other
    // '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': []
  },
}
