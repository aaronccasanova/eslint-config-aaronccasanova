[![travis build](https://img.shields.io/travis/aaronccasanova/eslint-config-aaronccasanova.svg?style=flat-square)](https://travis-ci.org/aaronccasanova/eslint-config-aaronccasanova)
[![version](https://img.shields.io/npm/v/eslint-config-aaronccasanova.svg?style=flat-square)](http://npm.im/eslint-config-aaronccasanova)
[![downloads](https://img.shields.io/npm/dm/eslint-config-aaronccasanova.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-aaronccasanova&from=2019-03-10)
[![MIT License](https://img.shields.io/npm/l/eslint-config-aaronccasanova.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/aaronccasanova/eslint-config-aaronccasanova.svg)](https://greenkeeper.io/)

# Modified: Wesbos Eslint and Prettier Setup

These are my settings for ESLint and Prettier

You might like them - or you might not. Don't worry you can always change them.

## What it does

- Lints JavaScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb
- You can see all the
  [rules here](https://github.com/aaronccasanova/eslint-config-aaronccasanova/blob/master/.eslintrc.js) -
  these generally abide by the code written in my courses. You are very welcome
  to overwrite any of these settings, or just fork the entire thing to create
  your own.

## Installing

You can use eslint globally and/or locally per project.

It's usually best to install this locally once per project, that way you can
have project specific settings as well as sync those settings with others
working on your project via git.

I also install globally so that any project or rogue JS file I write will have
linting and formatting applied without having to go through the setup. You might
disagree and that is okay, just don't do it then 😃.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-aaronccasanova
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should
   live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": ["aaronccasanova"]
}
```

Tip: You can alternatively put this object in your `package.json` under the
property `"eslintConfig":`. This makes one less file in your project.

5. Create a `.prettierrc.js` file in the root of your project's directory (it
   should also live where package.json does). Your `.prettierc.js` file should
   look like this:

```javascript
modules.exports = {
  ...require('prettier-config-aaronccasanova'),
  // optional overrides
}
```

Tip: You can alternatively specify the config in your `package.json` as follows
`"prettier": "prettier-config-aaronccasanova"`.

6. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write \"**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)\""
},
```

7. Now you can manually lint your code by running `npm run lint` and fix all
   fixable issues with `npm run lint:fix`. You probably want your editor to do
   this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-aaronccasanova
```

(**note:** npx is not a spelling mistake of **npm**. `npx` comes with when
`node` and `npm` are installed and makes script running easier 😃)

2. Then you need to make a global `.eslintrc` file:

ESLint will look for one in your home directory

- `~/.eslintrc` for mac
- `C:\Users\username\.eslintrc` for windows

In your `.eslintrc` file, it should look like this:

```json
{
  "extends": ["aaronccasanova"]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as
   we show next.

## With VS Code

Once you have done one, or both, of the above installs. You probably want your
editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the
   [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` →
   `Settings`. It's easier to enter these settings while editing the
   `settings.json` file, so click the `{}` icon in the top right corner:

```js
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": [
  "js"
],
```

## 🤬🤬🤬🤬 ITS NOT WORKING

start fresh. Sometimes global modules can goof you up. This will remove them
all.

```
npm remove --global eslint-config-aaronccasanova babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` file and
delete the `node_modules/` directory.

Then follow the above instructions again.

#### Look into the following extension for local development

###### npm-link-shared

- https://60devs.com/simple-way-to-manage-local-node-module-using-npm-link.html

- https://stackoverflow.com/questions/50674052/difference-between-npm-link-x-and-npm-install-path-to-x
