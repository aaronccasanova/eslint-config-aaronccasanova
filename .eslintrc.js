module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    // Additional support for no semi colons
    'no-unexpected-multiline': 'error',
    // https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md#rule-options
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  plugins: ['html', 'react-hooks'],
}

/**
 * Eslint Config Resources
 *
 * TODO: look into prod/development configs
 * @example:
 * rule: {
 *   no-debugger: inProd,
 *   no-console: inProd,
 * }
 */

// https://eslint.org/docs/user-guide/configuring#configuration-file-formats
// https://eslint.org/docs/user-guide/configuring#configuring-rules
// https://eslint.org/docs/rules/
// https://eslint.org/docs/developer-guide/working-with-rules
