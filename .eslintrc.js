/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "import/no-anonymous-default-export": "off",
  },
};
