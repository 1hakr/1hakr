module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'no-console': 'off',
    'space-before-function-paren': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-v-html': 'off'
  }
}
