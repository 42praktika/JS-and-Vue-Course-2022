### Задание

Реализуйте функцию `getCharacterData`, которая выдает информацию о персонаже из "Игры
Престолов"

Работать функция должна следующим образом:

1. Принимает в качестве аргументов два ключа - идентификатор персонажа (`caracterId`) и
   тип данных (`key`)
2. Отправляет запрос на `url` `https://www.anapioficeandfire.com/api/characters/<id>`,
   где `<id>` - идентификатор персонажа
3. Возвращает **в промисе** строку типа: `<имя персонажа>, <key>: <данные по этому ключу>`

### Примеры использования

```
getCharacterData(583, 'playedBy').then((info) => {
    console.log(info); // Jon Snow, playedBy: Kit Harington
});


getCharacterData(42, 'born').then((info) => {
    console.log(info); // Aegon Targaryen, born: In 281 AC or 282 AC, at Dragonstone
});
```

### Условия решения

1. Решение должно быть реализовано через промисы (см. теорию к занятию)

### Подсказки

1. Для получения имени в объекте персонажа используйте ключ `name`
3. Изучите формат
   данных **[JSON](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON)**