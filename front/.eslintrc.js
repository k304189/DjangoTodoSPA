module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "linebreak-style": ["error", "windows"], // 改行コードをCRLFに変更
    'react/react-in-jsx-scope': 'off', // JSXでのReactのImport必須設定を無効
    "import/no-unresolved": "off", // import時の絶対パス指定を無効
    // "import/extensions": [ // 相対パスのimportの拡張子を不要にする
    //   "never",
    //   "ignorePackages",
    //   {
    //     "js": "never",
    //     "jsx": "never",
    //     "ts": "never",
    //     "tsx": "never",
    //   }
    // ],
    "import/extensions": [
      ".js", ".jsx", ".ts", ".tsx"
    ],
    "react/jsx-filename-extension": [ // JSX記法を許容するファイル拡張子
      "error",
      {
        "extensions": [".jsx", ".tsx"]
      }
    ],
    "react/function-component-definition": [
      2, { "namedComponents": "arrow-function" }
    ],
    "arrow-body-style": ["error", "always"]
  },
};
