// .eslintrc.js
module.exports = {
  root: true,
  extends: ["expo", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "no-type-assertion"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "no-type-assertion/no-type-assertion": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
  },
};
