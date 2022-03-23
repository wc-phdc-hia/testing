module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  settings: {
    jest: {
      version: "27",
    },
  },
  root: true,
  extends: ["eslint:recommended", "airbnb", "prettier"],
  plugins: ["prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      rootMode: "upward",
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "no-shadow": "off",
    "no-await-in-loop": "off",
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: __dirname,
      },
    ],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-restricted-syntax": [
      "off",
      {
        selector: "ForOfStatement",
      },
    ],
    "no-nested-ternary": "off",
  },
};
