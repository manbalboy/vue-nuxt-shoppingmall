module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
    plugins: ['vue'],

    // add your custom rules here
    rules: {},
}
