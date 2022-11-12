### Задание

В данном задании необходимо реализовать компонент `Cards.vue`, отвечающий за рендеринг
карточек товаров в интернет-магазине.

### Исходные данные

В компонент передается массив объектов (один объект - одна карточка товара) следующей
структуры:

```
[{
    id: 0,
    src: 'some src',
    description: 'some description',
    head: 'Iphone X 64GB',
    price: '800$',
    number: 0,
    max: 4,
}]
```

### Задачи

1. Создать шаблон для отображения карточек. Итоговый `html` должен иметь следующую
   структуру:

```
<div class="card-container">
    <div class="card">
        <img src="..." class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">
                Iphone X 64GB
            </h5>
            <h4 class="card-title">
                800$
            </h4>
            <p class="card-text">
                Packed with Innovative Features Including a Super Retina Display, TrueDepth Camera System, Face ID and A11 Bionic Chip with Neural Engine
            </p>
            <div class="card__buttons">
                <button class="btn btn-primary button-plus">
                    +
                </button>
                <button class="btn btn-primary button-minus">
                    -
                </button>
                <div>0 шт.</div>
            </div>
            <div class="card__alert alert alert-danger">
                Данного товара доступно только 1 шт.
            </div>
        </div>
    </div>
    ...
    другие карточки
    ...
</div>
```

2. В каждой карточке должно быть по две кнопки (`+` и `-`), а также итоговое количество.
   При нажатии на кнопки количество должно увеличиваться или уменьшаться (меньше `0` быть
   не может).
3. Для каждого товара имеется число, определяющее количество элементов товара на складе (
   ключ `max`). При введении количества больше этого значения необходимо выводить в
   карточке уведомление (`<div class="card__alert alert alert-danger">`) с
   текстом `Данного товара доступно только <сколько-то> шт.`. В противном случае
   уведомления в карточке быть не должно.

### Где и как посмотреть

1. Из корня проекта запускаем сборку `vue` через `webpack` - `yarn watch`
2. Для визуального отслеживания изменений необходимо открыть в браузере
   файл `./index.html`