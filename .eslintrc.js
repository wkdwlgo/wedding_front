module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier', // prettier와 충돌 방지용 config만 유지
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // fs, path 등 Node.js 기본 모듈
          'external', // 외부 패키지
          'internal', // @/components 같은 내부 경로
          ['parent', 'sibling', 'index'], // ../, ./ 경로
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always', // 그룹 간 공백 한 줄
        alphabetize: {
          order: 'asc', // 알파벳순
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
