module.exports = {
    "env": {
        browser: true,
        es2021: true,
        node: true,
    },
    "extends": [
        'airbnb-base',
        "plugin:vue/vue3-essential",
        "standard"
    ],
    "overrides": [
    ],
    "parserOptions": {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        indent: ['error', 4],
    }
}
