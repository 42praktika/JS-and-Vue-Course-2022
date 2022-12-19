### Вопросы к экзамену по курсу `Native JavaScript + Vue.js`

### JS

1. В чем отличие "let" от "const" в JS?
2. Какие типы данных есть в JS?
3. Какой типизацией обладает JS? Объясните, что это означает
4. Что происходит в момент вызова 'name'.length. Чему и почему равно данное выражение?
5. Какие комплексные типы данных существуют в JS?
6. Какие способы взаимодействия с пользователем через код предлагает к использованию JS?
7. Функции - объекты "первого рода" в JS. Что это означает?
8. Какие способы обойти массив (перебрать его элементы) имеются в JS?
9. Как в JS выглядит тернарный оператор?
10. В чем отличие функций в JS по ES5 и по ES6+?
11. Как в JS определить дефолтное значение аргумента в функциях спецификаций ES5 и ES6+?
12. Объекты и массивы в JS передаются по ссылке. Что это означает и к каким проблемам в
    коде может привести?
13. Что делает метод "join" у массива?
14. Для чего используется метод "map" у массива? Приведите пример
15. Для чего используется метод "reduce" у массива? Приведите пример
16. Какие способы копировать объект имеются в JS?
17. На что указывает "this" в глобальной области видимости?
18. В чем различие методов "call" и "apply"? Для чего они применяются?
19. Как создать класс в JS? Как определить в нем свойства и методы?
20. Приведите примеры использования двух модульных систем: "CommonJS" и "ES Modules"
21. Как создать DOM-элемент с помощью JS? Как установить ему классы, id и другие атрибуты?
22. Что такое "Promise"? Зачем он нужен?
23. Как выполнить "параллельно" несколько промисов?
24. Что такое промисификация? Что и зачем она делает?
25. Что такое "async/await" в JS? Какую проблему решает и каким синтаксисом обладает?
26. Как "отловить" ошибку в промисе?
27. Объясните принцип устройства блока "try/catch/finally"
28. Какие существуют способы вывода ошибок в ui?
29. Что такое "AJAX"? Зачем он нужен?
30. Какие ключи доступны в ответе (response) от запроса с помощью метода "fetch"?
31. Что такое "setTimeout" и "setInterval"? Зачем они нужны?

### DOM, HTML, CSS

32. В чем отличие блочных элементов в html от строчных?
33. Какую структуру имеет html-тег? Какие элементы в него входят?
34. Что такое "каскадность стилей" в CSS?
35. Как определяется "специфичность" селекторов в CSS?
36. Чем опасен "important" в CSS?
37. Что такое DOM?
38. Как устанавливать и получать data-атрибуты DOM-элементов с помощью JS?
39. Какие способы поиска по элементам DOM-дерева имеются в JS?
40. Как получить "внутренности" DOM-элемента присутствуют в JS?
41. Как работает "событийная модель" в браузере?
42. Какие способы навешивания обработчиков событий на DOM-элементы существуют?
43. В чем отличие "event.target" от "event.currentTarget"?
44. Чем опасно навешивание обработчика на DOM-элемент с помощью атрибута onclick?
    Пример: <div onclick="doSomething()">Текст</div>
45. Что такое погружение и всплытие событий в браузере? Как можно "включить" фазу
    погружения?

### Frameworks, Vue + Vuex

46. Какую проблему решают фреймворки в современном мире разработки?
47. Как способы подключения Vue существуют?
48. Какие директивы существуют во Vue?
49. Для чего нужен атрибут "key" в работе с директивой "v-for"? Что и почему в него нужно
    устанавливать?
50. Как обработать событие клика на элементе с помощью Vue?
51. Что такое "модификатор события" во Vue? Какие модификаторы существуют?
52. Для чего нужна секция "methods" в экземпляре Vue?
53. В чем суть вычисляемых свойств во Vue?
54. В чем преимущества и недостатки компонентного подхода в формировании приложения на
    Vue?
55. Что такое однофайловые компоненты? Из каких секций они состоят, что в них
    располагается?
56. Почему "data" во Vue - функция?
57. Как работает реактивность Vue?
58. Для чего нужен метод "this.$set" в экземпляре Vue? Приведите примеры его использования
59. Объясните принцип работы концепции MVVM на примере Vue
60. Что означает термин "однонаправленный поток данных" в контексте работы во Vue?
61. Как во Vue передать данные от родительского компонента в дочерний и обратно?
62. Как можно настроить входные данные ("props")? Опишите каждую опцию
63. Зачем нужны "хуки" жизненного цикла во фреймворках? Какие "хуки" существуют во Vue?
64. Что такое "scoped-стили" в компонентах Vue? Зачем они нужны? Как работают?
65. Для чего нужна секция "watch" в компонентах Vue? В чем отличие слежения через "watch"
    от работы вычисляемых свойств?
66. Какие свойства экземпляра существуют в компонентах Vue?
67. Что такое "this.$refs" в компонентах Vue? Для чего используются?
68. В чем проблема совместного использования директив "v-for" и "v-if" на одном теге?
69. Что такое динамические компоненты во Vue? Зачем они нужны? Приведите пример
70. Что такое "фрагменты" во Vue? Зачем они нужны?
71. Что такое "инъекция зависимостей" во Vue? Зачем может использоваться?
72. Какую роль выполняют примеси в компонентах Vue? Как подключить примесь к компоненту?
73. Перечислите принципы разработки библиотеки компонентов в проекте
74. Что такое слоты во Vue? Как они работают и где используются?
75. Какие проблемы решает "Vuex"? В каких случаях его целесообразно использовать?
76. Опишите устройство концепции "MVC" на примере работы Vuex
77. В чем отличие действий от мутаций во Vuex? Зачем нужны те и другие?
78. За что отвечают геттеры во Vuex? Каких видов они бывают?
79. В чем суть модульной системы работы с Vuex? Какие проблемы она решает?
80. Расскажите о "пространстве имен" во Vuex
81. Каким образом во Vuex можно "подписаться" на выполнение мутаций?
82. Кто такое "персисторы" в контексте работы во Vuex? Зачем они нужны?
83. Опишите принципы выстраивания архитектуры приложения на Vuex

### Дополнительное

84. Что такое замыкание и как оно работает?
85. В чем заключается различие между декларативным и императивным подходами к
    программированию?
86. В чем суть функционального программирования?
87. Что такое "чистая функция"?
88. Что такое "пайплайн"?
89. Для чего в приложении необходимо выделять состояние? Приведите пример
90. Что такое "конечный автомат"? Приведите пример
91. В чем суть концепции "MVC"? Приведите пример простого приложения на "MVC"
92. Что такое и для чего нужен "webpack"? Какие проблемы он решает?
93. Опишите (кратко) логику работы сборщиков фронтенда на примере "webpack"
94. В чем суть асинхронного программирования?
95. Как работает "Event Loop"?
96. Зачем необходимо выделять работу с запросами в отдельный модуль api?
97. Какие виды тестирования ПО существуют?
98. Что такое линтинг? Зачем он нужен и какие библиотеки для линтинга JS существуют?
99. Что такое "localStorage" и "sessionStorage"? В чем их сходства и различия?
100. Что такое "виртуальный DOM"? Для чего он нужен? Кратко опишите принцип работы