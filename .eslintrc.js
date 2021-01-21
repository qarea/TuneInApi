module.exports = {
  root: true,
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: './*.scss',
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
  },
};
