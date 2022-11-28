### Сайт с информацией о кинематографе

В данном задании предстоит работать со слотами. Требуется разработать
компонент `CardBlock.vue`, который будет использоваться как шаблон для карточек элементов
на странице. Впоследствии данный шаблон можно будет использовать для создания разного рода
карточек (в нашей задаче карточек с режиссерами `Director.vue` и карточек с
фильмами `Movie.vue`).

### Задачи

1. Реализуйте компонент `./components/CardBlock.vue`:

В нем необходимо разработать добавить элемент `.card-block` в который поместить два блока
(для картинки и для описания элемента (классы смотри ниже)). **В каждом блоке необходимо
реализовать слот для передачи в него данных**.

2. Реализуйте компонент `./components/DirectorCard.vue`:

Данный компонент - карточка режиссера, созданная с помощью компонента `CardBlock.vue`.
Здесь необходимо в слоты компонента `CardBlock.vue` передать соответствующие теги и
данные (классы смотри ниже).

3. Реализуйте компонент `./components/MovieCard.vue`:

Данный компонент - карточка фильма, созданная с помощью компонента `CardBlock.vue`.
Создается аналогично компоненту `DirectorCard.vue`

4. Компонент `Cinema.vue` уже разработан. Он импортирует компоненты карточек режиссера и
   фильма и выводит с их помощью массивы (`dirctors` и `movies`)

Итоговый `DOM` будет иметь следующую структуру:

```
<div class="cinema">
    <h2>Режиссеры</h2>
    <div class="cinema__elements">
        <div class="card-block">
            <div class="card-block__image">
                <img src="./assets/directors/nolan.jpg">
            </div>
            <div class="card-block__info">
                <div class="director__info-name">
                    Кристофер Нолан
                </div>
                <div>
                    <span class="director__title">
                        Возраст:
                    </span>
                    51
                </div>
                <div>
                    <span class="director__title">
                        Место рождения:
                    </span>
                    Лондон, Великобритания
                </div>
                <div>
                    <span class="director__title">
                        Фильмы:
                    </span>
                    Интерстеллар, Начало, Помни, Престиж
                </div>
            </div>
        </div>
        <div class="card-block">
            ...
        </div>
    </div>
    <h2>Фильмы</h2>
    <div class="cinema__elements">
        <div class="card-block">
            <div class="card-block__image">
                <img src="./assets/movies/interstellar.jpg">
            </div>
            <div class="card-block__info">
                <div class="movie__info-name">
                    Интерстеллар
                </div>
                <div>
                    <span class="movie__title">
                        Год:
                    </span>
                    2014
                </div>
                <div>
                    <span class="movie__title">
                        Режиссер:
                    </span>
                    Кристофер Нолан
                </div>
                <div>
                    <span class="movie__title">
                        Жанр:
                    </span>
                    фантастика, драма, приключения
                </div>
            </div>
        </div>
        <div class="card-block">
            ...
        </div>
    </div>
</div>
```

### Дополнительно

1. Все стили для отображения карточек определены
2. Данные приходят в следующем виде:

Карточка режиссера:

```
{
    id: 0,
    name: 'Кристофер Нолан',
    image: './assets/directors/nolan.jpg',
    age: 51,
    birthPlace: 'Лондон, Великобритания',
    movies: 'Интерстеллар, Начало, Помни, Престиж',
},
```

Карточка фильма:

```
{
    id: 0,
    name: 'Интерстеллар',
    image: './assets/movies/interstellar.jpg',
    director: 'Кристофер Нолан',
    year: 2014,
    genre: 'фантастика, драма, приключения',
},
```

### Где и как посмотреть

1. Из корня проекта запускаем сборку `vue` через `webpack` - `yarn watch`
2. Для визуального отслеживания изменений необходимо открыть в браузере
   файл `./index.html`