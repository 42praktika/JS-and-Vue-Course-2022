module.exports = {
    // окружение для выполнения кода
    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    // база для проведения анализа. В данном случае эталонным принят код сервиса airbnb
    extends: 'airbnb-base',

    // другие настройки
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },

    // уточнение базовых правил
    rules: {
        indent: ['error', 4],
    },
};