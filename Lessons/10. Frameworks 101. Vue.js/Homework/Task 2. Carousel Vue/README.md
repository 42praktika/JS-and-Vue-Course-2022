### Задание

В `Lesson 06/Task 2` мы реализовали слайдер для картинок на чистом `JS`, в этом задании
необходимо сделать то же самое на `vue` в файле `Carousel.vue`

### Задачи

Компонент должен работать следующим образом:

1. В компонент передается массив `url` картинок для отображения в карусели (количество
   элементов может быть любым) - ключ `images` в `data`;
2. Имеет две кнопки - "Вперед" и "Назад", переключающие картинки.

Элементы с картинками добавляются в `DOM` в функции (в элемент `.carousel-inner`). Каждая
картинка должна иметь следующую структуру:

```
<div class="carousel-item active">
    <img
        class="d-block w-100"
        src="..."
    />
</div>
```

(наличие классов `carousel-item`, `d-block` и `w-100` обязательно)

У открытой в данный момент картинки должен присутствовать класс `active` (а у всех
остальных отсутствовать)

3. При нажатии кнопки "Вперед" на последнем элементе должно происходить переключение на
   первый, при нажатии кнопки "Назад" на первом элементе - на последний

При первоначальной загрузке `html` должен иметь следующую структуру (теги и классы должны
совпадать):

```
<div class="carousel">
    <div class="carousel-inner">
        <div class="carousel-item">
            <img src="..." class="d-block w-100 active">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100">
        </div>
        <div class="carousel-item active">
            <img src="..." class="d-block w-100">
        </div>
    </div>
    <button class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

### Где и как посмотреть

1. Из корня проекта запускаем сборку `vue` через `webpack` - `yarn watch`
2. Для визуального отслеживания изменений необходимо открыть в браузере
   файл `./index.html`