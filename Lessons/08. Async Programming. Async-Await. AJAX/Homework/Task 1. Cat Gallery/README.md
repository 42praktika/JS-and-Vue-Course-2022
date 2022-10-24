### Котогалерея!

Реализуйте функцию `setCatGallery`

Работать функция должна следующим образом:

1. Аргументы функции отсутствуют
2. Функция должна отправить 10 запросов
   на `url` `https://api.thecatapi.com/v1/images/search`. В ответе приходит массив из
   одного объекта с фотографией кота
3. Каждый кот добавляетcя на страницу в элемент `.main__container` в виде тега `<img>` с
   соответствующим `url` (`url` есть в ответе на запрос)
4. **После успешной вставки всех элементов** функция возвращает **в промисе**
   строку `cat gallery is ready!`

### Примеры использования

Базовый `DOM` имеет следующую структуру:

```
<div class="main">
    <h1>Котогалерея</h1>
    <div class="main__container"></div>
</div>
```

```
setCatGallery().then((text) => {
    console.log(text); // cat gallery is ready!
}
```

После использования функции `DOM` должен иметь следующую структуру:

```
<div class="main">
        <h1>Котогалерея</h1>
        <div class="main__container">
            <img src="https://cdn2.thecatapi.com/images/MU-5ezvJu.jpg">
            <img src="https://cdn2.thecatapi.com/images/MTYyNDMwMg.jpg">
            <img src="https://cdn2.thecatapi.com/images/rtBHHEPd3.jpg">
            <img src="https://cdn2.thecatapi.com/images/5tg.gif">
            <img src="https://cdn2.thecatapi.com/images/mhxL_1xrZ.jpg">
            <img src="https://cdn2.thecatapi.com/images/cW-37OMCj.jpg">
            <img src="https://cdn2.thecatapi.com/images/5HNiBkts1.jpg">
            <img src="https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg">
            <img src="https://cdn2.thecatapi.com/images/d6d.jpg">
            <img src="https://cdn2.thecatapi.com/images/cgg.jpg">
        </div>
    </div>
```

### Условия решения

1. Решение должно быть реализовано через промисы или `async/await` (см. теорию к занятию)

### Подсказки

1. Возможно для решения пригодится `Promise.all`
2. Внимательно изучите структуру приходящего ответа

### Дополнительно

1. В задании используется библиотека `axios`, она имеет отличный от `fetch` "интерфейс".
   Для тестирования и отладки в браузере она используется по-разному (см. `./index.js`)