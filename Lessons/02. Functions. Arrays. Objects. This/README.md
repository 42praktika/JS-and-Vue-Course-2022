## Функции, объекты, массивы, this

С базовыми синтаксическими конструкциями мы уже познакомились, пришло время более детально
разобраться с механикой работы функций в `JS`, а также с работой более сложных структур
данных - таких, как объекты и массивы.

### 1. Функции

Как и в случае с объявлением переменных, функции тоже видоизменились на рубеже перехода
от `ES5` к `ES6+`. Рассмотрим оба варианта:

1.`ES5`-functions

До 2015 года существовало два основных подхода к созданию функций. В обоих для создания
использовалось ключевое слово `function`:

- `Function Declaration` (объявление функции):

Простое объявление. Функция становится доступна во всей области видимости

```
function helloWorld() {
    console.log('Hello World!');
}
```

Здесь в скобках перечисляются **аргументы** функции, например:

```
function getAffirmation(name) {
    console.log('Everything will be okay, ' + name + '!');
}

getAffirmation('Yki'); // Everything will be okay, Yki!
```

Аргументов может быть любое количество.

Такую функцию можно использовать и до ее объявления, благодаря "всплытию"

```
helloWorld();   // 'Hello World!

function helloWorld() {
    console.log('Hello World!');
}
```

- `Function Expression` (функциональное выражение):

Функция создается только в момент объявления переменной

```
const helloWorld = function() {
    console.log('Hello World!');
}
```

Созданная таким образом функция становится доступна только после этой строки, поскольку
определение функции теперь жестко связано с моментом инициализации переменной, в которую
мы положим эту функцию.

```
helloWorld();   // ReferenceError

const helloWorld = function() {
    console.log('Hello World!');
}
```

В функциях по `ES5` не было "встроенного" способа задать дефолтное значение аргументов.
Однако сделать это все же можно, используя методы самого `JS`:

```
function greeting(message, user) {
    user = user || 'Vladimir';

    // Или
    if (typeof user === undefined) {
        user = 'Vladimir';
    }
    // Или
    if (arguments.length === 1) {
        user = 'Vladimir';
    }
    // Здесь arguments - массив всех аргументов функции
}
```

Помимо выполнения какой-то логики внутри функции способы "возвращать" некие данные наружу.
Это нужно для того, чтобы функция могла работать как "черный ящик" - мы даем ей какие-то
данные, а на выходе получаем другие. Для возврата значения из функции в `JS` используется
ключевое слово `return`:

```
const getAgeDifference = function(firstAge, secondAge) {
    const diff = firstAge - secondAge;
    return diff;
}

const difference = getAgeDifference(10, 3); // теперь в difference лежит результат выполнения функции
console.log(difference);                    // 7
```

2. `ES6`-functions

В `2015` году функции стали "стрелочными". <br>
Простейшая функция выглядит следующим образом: `() => {}`. <br>
Эта функция ничего не принимает в качестве аргументов и ничего не возвращает. Тем не менее
это вполне "рабочая" функция.

Рассмотрим более сложный пример:

```
const greeting = (name) => {
    console.log(`Ты уволен, ${name}!`);
}

// В данном случае для создания строки мы использовали интерполяцию

greeting('Денис'); // 'Ты уволен, Денис!'
```

У таких функций есть и короткий синтаксис:

```
const greeting = (name) => `Ты уволен, ${name}!`;
```

Такая запись означает, что из функции возвращается текст `Ты уволен, ${name}!`.

#### А что, если я забуду return?

Функция в `JS` обязана что-то "вернуть", но не всегда это необходимо в контексте
выполнения поставленной задачи, поэтому ключевое слово `return` можно и не писать. В таком
случае из функции вернется дефолтное значение - `undefined`:

```
const nothingFunction = () => {};
const result = nothingFunction();
console.log(result);    // undefined
```

3. Функции в `JS` - тоже объекты. Именно благодаря этому они являются "объектами первого
   рода". Это значит, что функция - это сущность, которую можно передавать куда угодно

```
const getText = (userName) => 'Ты где был, ' + userName + '?';
// Кладем функцию в другую переменную
const newFunc = getID;
console.log(getText('Сергей')); // 'Ты где был, Сергей?'

// Передача функции как аргумента в другую функцию
const greeting = (callback) => {
    const text = `Писал код на assembler... Простите`;
    callback(text);
}

const logFunc = (text) => {
    console.log(test);
}
greeting(logFunc);  // 'Писал код на assembler... Простите'
```

Аргументы по умолчанию

```
const greeting = (message, user = 'Vladimir') => {
    ....
}
```

4. Замыкания, область видимости, окружение. <br>
   Как уже говорилось на предыдущем занятия, есть два типа области видимости - лексическая
   и глобальная.

```
let userName = 'Elon';

const consoleName = () => {
    console.log(userName);
}

userName = 'Musk';

consoleName();
// выведет 'Musk', потому что в момент вызова функции userName
// в глобальном окружении перезаписался на `Musk`
```

Пример замыкания

```
const makeGreeting = (greetingWord) => {
    const logName = (name) => {
        const text = `${greetingWord}, ${name}!`;
        console.log(text);
    }
    
    return logName; // функция-замыкание, замкнувшая в себе информацию о greetingWord
}

const welcomeGreeting = makeGreeting('Welcome');    // замкнули приветственное слово
welcomeGreeting('Elon');                            // 'Welcome, Elon!'
welcomeGreeting('Liya');                            // 'Welcome, Liya!'

const hiGreeting = makeGreeting('Hi');
hiGreeting('Elon');                                 // 'Hi, Elon!'
hiGreeting('Liya');                                 // 'Hi, Liya!'
```

Здесь переменная `greetingWord` "запоминается" функцией `logName` и используется в
дальнейшем. <br>
Функция `welcomeGreeting` (`hiGreeting`) при вызове создает локальную область видимости,
где есть `greetingWord = 'Welcome'` в первом случае и `greetingWord = 'Hi'` - во втором

***

### 2. Объекты

Объект в данном случае - простая структура данных, состоящая из пар `ключ: значение`

- Объекты передаются по ссылке. Это значит, что при объявлении объекта мы создаем
  уникальную ссылку на него. Из-за этого нюанса сравнивать объекты чаще всего
  бессмысленно, равенство мы получим только в том случае, когда один и тот же объект
  сравнивается сам с собой.

```
const objOne = { name: 'Geralt' };
const objTwo = { name: 'Geralt' };
console.log(objOne === objTwo); // false, потому что сравниваются две ссылки
```

- Объявление объекта. Ключом в объекте могут быть только строки и символы (почти не
  используются в качестве ключей)

```
const user = {
    name: 'Elon',
    age: 50,
    children: [ 'Nevada', 'Damian', 'Sakson', 'Kai' ],
    is_genius: true,
};
```

- Получение данных

```
const name = user.name;        // 'Elon'
const age = user.age;          // 50
const surname = user.surname;  // undefined

// Динамические свойства
const property = 'name';
const name = user[property];   // 'Elon'
```

- Запись данных

```
user.name = 'Elon Musk';
user.location = 'US';
user.getAge = function() {
    return this.name;
}
```

- Удаление данных

```
delete user.name;
delete user.children;
console.log(user);  // { age: 50, is_genius: true };
```

- Получение ключей объекта

```
const keys = Object.keys(user); // [ 'name', 'age', 'children', 'is_genius' ]
```

- Получение значений объекта

```
const values = Object.values(user); // [ 'name', 'age', [ 'Nevada', 'Damian', 'Sakson', 'Kai' ], true ]
```

- Получение вхождений объекта

```
const entries = Object.entries(user);
/*
[
    [ 'name', 'Elon' ],
    [ 'age', 50 ],
    [ 'children', [ 'Nevada', 'Damian', 'Sakson', 'Kai' ] ],
    [ 'is_genius', true ],
]
*/
```

- Слияние объектов

```
const objectOne = { name: 'Tom', age: 59 };
const objectTwo = { surname: 'Cruise' };
const result = { ...objectOne, ...objectTwo };       // es6+
const result = Object.assign(objectOne, objectTwo);  // es5

// { name: 'Tom', age: 59, surname: 'Cruise' }
```

- Копирование объектов

```
const user = { name: 'Tom', age: 59 };
const copyOfUser = Object.assign({}, user);

// or
import _ from 'lodash';
const copyOfUser = _.cloneDeep(user);

// or
const copyOfUser = { ...user }; // клонирует только на один уровень!
```

- Обход перечисляемых свойств объекта в цикле `for in`:

```
const user = { name: 'Justine', surname: 'Henin', area: 'tennis player' };

for (let key in user) {
    console.log("the key is " + key);
}
```

***

### 3. Массивы

- Объявление массива (двумя возможными способами)

```
const cars = ['Tesla', 'Audi', 'Lada'];
const cars = new Array('Tesla', 'Audi', 'Lada');
```

- Массивы передаются по ссылке (потому что массив - это тоже объект!)

```
const arrOne = [];
const arrTwo = [];
console.log(arrOne === arrTwo); // false, потому что сравниваются две ссылки
```

- Получение данных через индекс

```
const car = cars[1];  // 'Audi'
```

- Запись данных

```
cars[2] = 'BMW';      // ['Tesla', 'Audi', 'BMW']
cars[4] = 'Renault'   // ['Tesla', 'Audi', 'BMW', , 'Renault']
```

#### Встроенные методы работы с массивами

- Определение длины массива

```
const cars = ['Tesla', 'Audi', 'BMW']
const carsLength = cars.length;  // 3
```

- Конкатенация массивов

```
const carsOne = ['Tesla', 'Audi', 'BMW'];
const carsTwo = ['Renault', 'Mercedes', 'Ferrari'];
const carsThree = carsOne.concat(carsTwo);
// ['Tesla', 'Audi', 'BMW', 'Renault', 'Mercedes', 'Ferrari'];
```

- Объединение массива в строку

```
const carsString = carsOne.join();     // 'Tesla,Audi,BMW'
const carsString = carsOne.join('-');  // 'Tesla-Audi-BMW'
```

- Фильтрация массива

```
const users = [
    { name: 'Alex', age: 10 },
    { name: 'Pat', age: 25 },
    { name: 'Tom', age: 18 },
    { name: 'Sergey', age: 36 }
]
const filteredUsers = users.filter((user) => {
    return user.age > 20;
});
// [{ name: 'Pat', age: 25 }, { name: 'Sergey', age: 36 }]
```

- Трансформация массива

```
const mappedUsers = users.map((user) => {
    return user.age;
});
// [ 10, 25, 18, 36 ]
```

- Агрегация массива

```
const totalAge = users.reduce((acc, user) => {
    const sum = acc + user.age;
    return sum;
}, 0);
// 89
```

Другие методы:

- `pop` - удаляет **на месте** элемент, возвращает его

```
const numbers = [ 10, 25, 18, 36 ];
const lastElement = numbers.pop();
console.log(lastElement); // 36
console.log(numbers); // [ 10, 25, 18 ]
```

- `push` - добавляет элемент, возвращает новую длину

```
const numbers = [ 10, 25, 18, 36 ];
const newLength = numbers.push(42);
console.log(newLength);  // 5
console.log(numbers);    // [ 10, 25, 18, 36, 42 ]
```

- `sort` - сортирует массив **на месте**

```
const numbers = [ 36, 1, 2, 10, 21 ];
numbers.sort();
console.log(numbers);  // [ 1, 10, 2, 21, 36 ]
```

Для "нужной" сортировки нужно передать в виде аргумента функцию-сортировщик

- Деструктуризация массивов

```
const [first, second] = ['js', 'cool'];
console.log(first);    // 'js'
console.log(second);   // 'cool'
```

- Spread, Rest операторы

```
const beers = [ 'gambrinus', 'kozel', 'bernard' ];
const result = [ 'bakalar', 'budweiser', ...beers ];
// [ 'bakalar', 'budweiser', 'gambrinus', 'kozel', 'bernard' ]
```

- Слияние массивов

```
const one = [ 1, 2, 3 ];
const two = [ 5, 6, 7 ];
const result = [ ...one, ...two ]; // [ 1, 2, 3, 5, 6, 7 ]
// As same As 
const result = one.concat(two);
```

- Копирование массива

```
const array = ['coldplay', 'radiohead'];
const copy = [...array];
const copy = array.slice();
```

- Обход массива в цикле `for of` (данный цикл работает для всех итерируемых
  объектов (`Array`, `Map`, `Set`))

```
let numbers = [ 21, 42, 58 ];

for (let number of numbers) {
    console.log(number);
}
```

***

### 4. Map/Set [самостоятельное изучение]

Помимо обычных массивов существуют и другие способы объединить данные
в **[коллекции](https://learn.javascript.ru/map-set)**

***

### 5. Что же такое `this`?

`this` - специальное ключевое слово, используемое в функциях для получения данных <br>
В большинстве случаев значение `this` определяется тем, каким образом вызвана функция.

- При определении функции как метода объекта `this` указывает на сам объект

```
const user = {
    id: 42,
    name: 'Kimi',
    func: function() {
        return this.id;
    },
};

console.log(user.func()); // 42
```

- Глобальный объект

```
console.log(this === window); // true
// в браузере глобальный объект - window
// в node.js глобальный объект - global
```

- В пределах функции значение `this` зависит от того, каким образом вызвана функция.

Вызов без контекста

```
function someFunc(){
    return this;
}

// В браузере:
someFunc() === window; // true
```

#### Использование `call`, `apply`

Данные методы привязывают `this` к конкретному объекту

```
const user = { name: 'Elon' };

const name = 'Musk';

function doThings() {
    return this.name;  // значение this зависит от контекста вызова функции
}

doThings();          // 'Musk'
doThings.call(user);  // 'Elon'
doThings.apply(user); // 'Elon'
```

Отличие методов `call` и `apply` заключается в том, что в случае вызова функции
через `call` аргументы передаются через запятую, а в случае вызова через `apply` -
аргументы передаются в виде массива:

```
// Перед нами два идентиных вызова
doThings.call(user, argument1, argument2);
doThings.apply(context, [argument1, argument2]);
```

#### Использование `bind`

`bind` - еще один способ привязать `this`

```
function getName() {
    return this.name;
}

const newFunc = getName.bind({ name: 'Elon' });
console.log(newFunc());     // Elon

const newNewFunc = getName.bind({ name: 'Sergey' }); // bind "привязывается" только один раз
console.log(newNewFunc());  // Elon
console.log(newNewFunc());  // Elon
```

Отличие от `call` и `apply` заключается в том, что `bind` не вызывает функцию, а только
привязывает к ней контекст (оборачивает функцию в это контекст). После привязки мы можем
вызвать саму функцию.

**В стрелочных функциях нет `this`**

`this` привязан к окружению, в котором была создана функция. В глобальной области
видимости `this` будет указывать на глобальный объект.

Пример взят
с [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```
function Person() {
    // В конструкторе Person() `this` указывает на себя.
    this.age = 0;
    
    setInterval(function growUp() {
        // в функции growUp() `this` указывает
        // на глобальный объект, который отличается от `this`,
        // определяемом в конструкторе Person().
        this.age++;
        console.log(this.age);  // NaN
    }, 1000);
}

var p = new Person();
```

В случае использования стрелочной функции:

```
function Person(){
    this.age = 0;
    
    setInterval(() => {
        this.age++;             // `this` указывает на объект Person
        console.log(this.age);  // 1
    }, 1000);
}

var p = new Person();
```