### 1. Тестирование `JS`

**[Виды тестирования ПО](http://wiki.rosalab.ru/ru/index.php/Виды_тестирования_ПО)**.

Для тестирования функционала могут использоваться внутренние библиотеки компании, однако
проще всего разрабатывать свою систему тестов на основе какой-либо сторонней библиотеки. В
данном репозитории для тестирования используется специальный тестовый
фреймворк **[Jest](https://jestjs.io/ru/)**. Он позволяет гибко настраивать сами тесты и
предоставляет крайне информативный вывод.

Рассмотрим пример теста `Lesson 06/Task 2. Carousel`:

Выполняемый файл называется index.**test**.js и имеет следующую структуру:

```
// Здесь описывается окружение, в котором необходимо выполнить тест
// в данном случае идет работа с DOM-деревом, поэтому окружение - jsdom
/**
 * @jest-environment jsdom
 */
 
// импортируем тестируемую функцию
import setCarousel from './index';

// конфигурируем (описываем) тесты
describe('c.6.2 carousel', () => {

    // создаем внутреннее окружение
    // настраиваем вспомогательный функционал, в данном случае конфигурируем базовую структуру DOM
    document.body.innerHTML = '<div class="main">\n' +
        '    <div class="carousel carousel-dark slide">\n' +
        '        <div class="carousel-inner"></div>\n' +
        '        <button class="carousel-control-prev" type="button" data-bs-slide="prev">\n' +
        '            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
        '        </button>\n' +
        '        <button class="carousel-control-next" type="button" data-bs-slide="next">\n' +
        '            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
        '        </button>\n' +
        '    </div>\n' +
        '</div>';

    // Запускаем функцию
    setCarousel([
        '../../../../Resources/images/carousel-images/carousel-1.jpg',
        '../../../../Resources/images/carousel-images/carousel-2.jpg',
        '../../../../Resources/images/carousel-images/carousel-3.jpg',
    ]);

    const carouselInner = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    // Описываем тесты для различных кейсов (вариантов поведения программы)
    // В данном случае проверяем, добавила ли наша функция на страницу нужные элементы
    it('c.6.2.1 all images has been added', () => {
        const imageDivs = carouselInner.querySelectorAll('.carousel-item');
        const amountOfDivs = [ ...imageDivs ].length;
        
        // Основное место теста. Здесь производится проверка на соответствие задуманному поведению
        // expect( <то, что получилось> ).toBe( <то, что должно было получиться> );
        expect(amountOfDivs).toBe(3);

        const images = carouselInner.querySelectorAll('img');
        const amountOfImages = [ ...images ].length;
        expect(amountOfImages).toBe(3);
    });

    const imageDivs = carouselInner.querySelectorAll('.carousel-item');

    // описываем другие кейсы (варианты использования)
    it('c.6.2.2 first div has "active" class and other divs have not', () => {
        const activesArray = checkAreElementsActive(imageDivs);

        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeTruthy();

        // какие-то тесты
    });
});
```

Тестировать можно не только работу с `DOM`-элементами, но и работу с обычными функциями,
определяющими какую-либо логику трансформации данных (как в начале семестра). Также
тестировать можно работу фреймворков и сопутствующих библиотек (например, `Vue.js`
и `Vuex`)

#### Snapshots

Помимо "ручного" перебора `DOM`-дерева популярностью
пользуется **[snapshot](https://jestjs.io/ru/docs/snapshot-testing)** -тестирование. <br>
Суть заключается в последовательном сравнении текущего `DOM`-дерева с заранее
заготовленными "снимками". Данный подход более удобен при разработке тестов, а также
предлагает возможность тестировать функциональные компоненты целиком (удобно при анализе
тестов), однако обладает и недостатками. Например, снимки придется перезаписывать при
малейшем изменении `DOM`-дерева.

***

### 2. Работа с датами [самостоятельное изучение]

Изучите работу
объекта **[Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date#methods)**

Также найдите информацию по тому, как применяются следующие методы:

- `getFullYear`
- `getMonth`
- `getDate`
- `getHours`
- `getMinutes`
- `getSeconds`
- `getMilliseconds`
- `setFullYear`
- `setMonth`
- `setDate`
- `setHours`
- `setMinutes`
- `setSeconds`
- `setMilliseconds`
- `setTime`

Библиотеки для работы с датами в `JS`:

- **[date-fns](https://date-fns.org/)**
- **[day.js](https://day.js.org/)**
- **[momentjs](https://momentjs.com/)**

***

### 3. Работа с url [самостоятельное изучение]

Изучите "интерфейс"
конструктора **[URL](https://developer.mozilla.org/ru/docs/Web/API/URL/URL)**

Проанализируйте вывод команды:

```
const url = new URL('https://devhints.io/jsdoc');
console.log(url);
```

Библиотеки для работы с `url` в `JS`:

- **[qs](https://www.npmjs.com/package/qs)**

***

### 4. Проверка стиля кодирования

У каждого языка программирования есть наиболее популярная библиотека для анализа и
корректирования стиля написания кода. В случае с `JS`
это **[Eslint](https://eslint.org/)**

Для настройки необходимо:

1. Установить соответствующие зависимости:

```
"devDependencies": {
    ...
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "14.2.1",
    "eslint-plugin-import": "^2.24.2",
    ...
},
```

2. добавить в проект файл `.eslintrc.js`, в котором описать конфигурацию проверки кода:

```
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
```

3. Добавить "шорткаты" в секцию `scripts` в файле `package.json`:

```
"scripts": {
    ...
    "lint": "eslint src/js",        // проверка кода
    "fix": "eslint src/js --fix"    // автоматическая корректировка кода
    ...
},
```

***

### 5. Хранение данных в браузере и на компьютере пользователя

Часто при разработке клиентской части приложения возникает задача сохранить какие-либо
данные для дальнейшего их использования в коде. Для этого используются локальное
(`localStorage`) и сессионное (`sessionStorage`) хранилища.

- `localStorage`
    * Позволяет хранить данные бессрочно. Удалить их можно в `JS` или с помощью очистки
      кэша браузера
    * Позволяет хранить данные объемом до `5МБ`

Использование:

```
storage = window.localStorage;                              // доступ к хранилищу

window.localStorage.setItem('current-urls', '[]');          // запись данных
const urls = window.localStorage.getItem('current-urls');   // получение данных
window.localStorage.removeItem('current-urls');             // удаление данных
window.localStorage.clear();                                // удаление всех данных из localStorage
```

В `localStorage` данные хранятся в виде строк. Для того чтобы сохранить и получить
нестроковые значения, используется синтаксис формата `JSON`:

```
const testData = { 'one': 1, 'two': 2, 'three': 3 };

window.localStorage.setItem('data', JSON.stringify(testData));  // Оборачиваем в строку
const data = JSON.parse(window.localStorage.getItem('data'));   // Получаем объект из строки
```

- `sessionStorage`
    * Хранит данные в пределах текущей сессии (во время работы браузера). Очищается
      автоматически при завершении сессии
    * В каждой вкладке браузера хранится свой объем данных

Синтаксис (включая все методы) аналогичен `localStorage`:

```
storage = window.sessionStorage;
```

***

### 6. Что такое технический долг

**Технический долг** - недоработки в коде, оставленные в нем по разным причинам. Например,
из-за отсутствия ревью в команде, из-за сжатых сроков или из-за недостаточного уровня
команды разработчиков. Так или иначе он имеет свойство увеличиваться в размере. И если с
ним не бороться, в один момент добавление нового функционала или починка какого-то бага
становятся технически невозможными, поэтому вопросу технического долга необходимо уделять
должное внимание при разработке проектов (особенно крупных).

На тему технического долга есть отдельная статья
на **[Хабре](https://habr.com/ru/post/453280/)**
