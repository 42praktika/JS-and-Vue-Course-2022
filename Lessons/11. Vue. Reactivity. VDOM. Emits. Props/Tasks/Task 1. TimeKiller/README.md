### Задание

Реализуйте приложение для "убийства времени"! (в компоненте `TimeKiller.vue`)

### Задачи

1. Реализуйте два компонента:
    * `TimeKiller.vue` (уже есть в директории) <br>
      Корневой компонент. Здесь в контейнере `.time-killer` находятся кнопка "Добавить
      время!" и импортированный компонент `TimeElement`. При нажатии на кнопку в
      блок `.times-container` должен добавиться `div` с классом `times-container__item` и
      содержимым в виде текущей даты (
      например, `Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)`) - форматировать
      дату не нужно
    * `TimeElement.vue` (нужно добавить самостоятельно) <br>
      Дочерний компонент, получающий из родителя текущий список дат. При **наведении**
      на `div` с датой происходит удаление этой даты (всего элемента). В данном компоненте
      добавьте следующий блок стилей:

```
<style>
.times-container__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fffdb1;
    border: 1px solid #e1dfa2;
    border-radius: 4px;
}
</style>
```

В определенный момент `DOM` может выглядеть так (классы должны совпадать):

```
<div class="time-killer">
    <button
        type="button"
        class="btn btn-warning"
    >
        Добавить время!
    </button>
    <div class="times-container">
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:27 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)
        </div>
        <div class="times-container__item">
            Fri Oct 1 2049 16:06:1 GMT+0300 (Moscow Standard Time)
        </div>
    </div>
</div>
```

### Где и как посмотреть

1. Из корня проекта запускаем сборку `vue` через `webpack` - `yarn watch`
2. Для визуального отслеживания изменений необходимо открыть в браузере
   файл `./index.html`