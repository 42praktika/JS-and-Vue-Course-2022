module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    extends: 'airbnb-base',

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'import/prefer-default-export': 'off',
        'no-alert': 'off',
        'default-case': 'off',
        'no-shadow': 'off',
        'import-extensions': 'off',
    },
};
