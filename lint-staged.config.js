module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|vue)': [
      'eslint . --fix',
    ],
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
      'prettier --write',
      // Note: add this to indivual package's lint-staged config
      // 'jest --findRelatedTests',
      'git add',
    ],
  },
}
