// Импортируем плагины, вспомогательные библиотеки
const path = require('path');
const EncodingPlugin = require('webpack-encoding-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    // тип сборки - для разработки или в продакшн
    mode: process.env.NODE_ENV || 'development',

    // "точка входа" в приложение. Это коренвой js-файл функционала, к нему подключаются остальные файлы
    entry: {
        'core': './src/index.js'
    },

    // директория, в которой будет лежать build (наша сборка)
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: '[name].bundle.js',
    },

    module: {
        // правила для трансформации файлов разных расширений
        rules: [
            // `js`-файлы должны обработаться спецальным лоадером, который преобразует "новый" код в "старый"
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/')
            },
            // `css`-файлы имеют внутри импорты, которые тоже нужно обработать
            {
                test: /\.css$/,
                use: [
                    'css-loader',     // работа с импортами
                    'style-loader',  // добавление стилей в DOM-дерево
                ]
            },
        ]
    },

    // Подключаем плагины для работы с языками, кодировками и т.д.
    plugins: [
        new EncodingPlugin({
            encoding: 'cp-1251'
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['ru'],
        }),
    ],

    resolve: {
        // настраиваем сокращения для удобной разработки
        alias: {
            '@': path.resolve(__dirname, 'js/')
        }
    },

    // настраиваем инструменты разработчика для каждого мода
    devtool: this.mode ? 'eval-source-map' : 'cheap-source-map'
};
