### Задание

Реализуйте и функцию, которая сравнивает два объекта и возвращает результат сравнения в
виде объекта.

**Данная задача имеет повышенный уровень сложности, поэтому за ее решение ставится 1
дополнительный балл (в общий зачет семестра)**

Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением
строка с описанием отличий:

- `added` — ключ отсутствовал в первом объекте, но был добавлен во второй
- `deleted` — ключ был в первом объекте, но отсутствует во втором
- `changed` — ключ присутствовал и в первом и во втором объектах, но значения отличаются
- `unchanged` — ключ присутствовал и в первом и во втором объектах с одинаковыми
  значениями

### Примеры использования

```
generateDifference(
    { name: 'Ilon', surname: 'Mask', age: 50 },
    { name: 'Ilon-genius', surname: 'Mask', children: [] },
);

// Результат:
// {
//   name: 'changed',
//   surname: 'unchanged',
//   age: 'deleted',
//   children: 'added',
// }
```