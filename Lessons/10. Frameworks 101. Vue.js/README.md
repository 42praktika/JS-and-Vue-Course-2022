### Фреймворки для работы с `JS`

`JavaScript` - крайне функциональный язык программирования, позволяющий создавать
интерфейсы любого уровня сложности, наполнять приложения любым функционалом. <br>
В то же время нативный (`native` - природный) `JS` не предусматривает в себе технологий
для удобной разработки интерфейсов. При этом современные (и не только современные)
тенденции в архитектурном проектировании приложений (`web` и `server`) создают предпосылки
для использования паттернов проектирования.

Для удобства разработки было разработано множество фреймворков. <br>
**Фреймворк** - программная платформа, определяющая структуру программной системы;
программное обеспечение, облегчающее разработку и объединение разных компонентов большого
программного проекта.

- Фронтенд фреймворки:
    * **[React.js](https://ru.reactjs.org/)**
    * **[Angular](https://angular.io/)**
    * **[Vue.js](https://vuejs.org/)**
    * **[Ember.js](https://emberjs.com/)**
    * etc.

- Бэкенд фреймворки:
    * **[Express.js](https://expressjs.com/ru/)**
    * **[Koa](https://koajs.com/)**
    * etc.

Внедрение фреймворка дает возможность более быстро и эффективно разрабатывать приложение,
а также в дальнейшем его поддерживать, дорабатывать и расширять.

Вот некоторые преимущества использования фреймворков:

- в проекте образуется отчетливая структура кода (а не один файл с 10 000 строк кода)
- реактивность - способность динамически связывать данные приложения и визуальное
  отображение
- возможность создания модульной системы кода (компонентный подход)
- возможность более удобного выделения состояния приложения (и работы с ним)
- простые задачи делаются просто (правда, зависит от разработчика)

Стоит заметить, что фреймворки хоть и крайне удобная вещь, но:

1. Их использование не всегда уместно (например, если ваше приложение крайне мало)
2. Внутри они работают на базовых синтаксических конструкциях языка программирования (`JS`
   в данном случае)

Так что фреймворки - это не панацея, а их использование опционально.
***

### Vue.js

Как написано на официальном сайте фреймворка, **Vue** (произносится /vjuː/, примерно как
view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. <br>
Разработал
его [Evan You](https://twitter.com/youyuxi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
в 2014 году

На данный момент самая новая версия `vue` - `3`, однако самая стабильная и используемая
версия - `2`, ее и мы и будем изучать в данном курсе. Заметим также, что в плане
использования разница между второй и третьей версией невелика, основные различия кроются
во внутренних технологиях, оптимизации и производительности.

Данный фреймворк позволяет разрабатывать клиентскую часть приложений (одностраничные и
многостраничные приложения)
***

### Простые манипуляции с vue

- добавление `vue` на страницу/в проект

1. Добавляем скрипт на страницу:

```
// development build
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

// production build
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```

2. Установка `vue` как пакета

```
yarn add vue

// или
npm install vue
```

Создать примитивное приложение можно, используя конструктор `new Vue`(vue `2+`):

```
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script>
    const app = new Vue({
        // Элемент для монтирования приложения
        el: '#app',
        // объект с данными приложения
        data() {
            return {
                name: 'Kimi',
                number: 42,
            }
        },
    });
</script>
```

В версии `3+` можно воспользоваться методом `crateApp`:

```
// Элемент для монтирования приложения
<div id="app"></div>

// подключаем vue-3
<script src="https://unpkg.com/vue@next"></script>
<script>
    const app = Vue.createApp({
        // функция, возвращающая объект данных приложения
        data() {
            return {
                name: 'Kimi',
                number: 42
            };
        }
    });
    // момент монтирования приложения в элемент на странице
    App.mount('#app');
</script>
```

В данном случае мы создали простое приложение и передали в него некоторые данные (имя и
номер). Теперь необходимо как-то отобразить переданные данные. Для этого используем
синтаксис `{{ }}`:

```
<div id="app">
    <div>
        Name: {{ name }}
    </div>
    <div>
        Number: {{ number }}
    </div>
</div>
```

Для привязки данных к тегам во `vue` используются **директивы**

#### Создание шаблона

Для определения шаблона можно воспользоваться двумя способами:

1. Ключ `template` в конструкторе `new Vue`:

```
<div id="app"></div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                name: 'Kimi',
                number: 42,
            };
        },
        template: '<div><span>{{ name }}</span><input type="text" v-model="name" /></div>',
    });
</script>
```

Здесь шаблон будет рендериться в конкретный элемент на странице (`el: '#app'`)

2. Создать шаблон непосредственно в `html`:

```
<div id="app">
    <div>
        Name: {{ name }}
    </div>
    <div>
        Number: {{ number }}
    </div>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                name: 'Kimi',
                number: 42,
            };
        },
    });
</script>
```

Так как в данном случае ключа `template` нет, `Vue` автоматически примет переданный
элемент (`el: '#app'`) как шаблон и свяжет данные уже с ним.

#### v-bind

Например, для подставки в атрибут `src` элемента `img` ссылку на картинку, можно
использовать директиву `v-bind`, связывающую атрибут с данными приложения. Все директивы
во `vue` начинаются с `v-`

```
<div id="app">
    <img v-bind:src="imgSrc" />
</div>

...
data() {
    return {
        imgSrc: '<some url>',
    }
},
...
```

У данной директивы есть короткая (рекомендуемая к использованию) запись:

```
<img :src="imgSrc" />
```

Также мы можем привязать стили, классы и любые другие атрибуты:

```
<div :style="nameStyles">
    Name: {{ name }}
</div>
<img :class="imgClass"/>

...

data() {
    return {
        imgClass: 'ferrari-img',
        nameStyles: { 'background-color': '#c4ffba' },
    }
},
```

#### v-for

Отображение массивов данных:

```
<div
    v-for="(option, index) in options"
    key="index"
>
    {{ option }}
</div>

...

data() {
    return {
        options: [
            { name: 'js', id: 0 },
            { name: 'java', id: 1 },
            { name: 'php', id: 2 },
            { name: 'golang', id: 3 },
            { name: 'dart', id: 4 },
        ],
    }
},
```

При переборе коллекций `vue` просит в повторяемый тег добавить атрибут `key`. Данный
атрибут позволяет `vue` более оптимизированно перерисовывать элементы коллекции при
каких-либо изменениях в ней. В данный атрибут **не рекомендуется устанавливать индекс
элемента в массиве** (как в примере выше), так как при добавлении новых элементов в
массив (и при их удалении) `vue` не сможет определить, какие элементы уже находятся
в `DOM`-дереве, и полностью перерисует весь массив.

#### v-if/v-if-else/v-else

Условная отрисовка шаблонов:

```
<div v-if="name">
    {{ name }}
</div>
<div v-else-if="number">
    {{ number }}
</div>
<div v-else>
    Нет данных
</div>

// или же
<div v-show="name">
    {{ name }}
</div>
```

#### v-model

Связь полей ввода и состояния приложения: <br>
При наборе текста в инпуте ключ `text` в объекте `data` обновляется автоматически

```
<input v-model="text"/>

...

data() {
    return {
        text: ''
    }
},
```

#### v-html

Вставка текста как `html`:

```
<div v-html="innerHTML"></div>

...

data() {
    return {
        innerHTML: '<span>внутренний текст в спане<span>',
    }
},
```

#### v-on

Обработка событий

```
<button v-on:click="alert('no way...');">
    Кнопка
</button>
```

Или в короткой (более предпочтительной) записи:

```
<button @click="alert('no way...');">
    Кнопка
</button>
```

Во `vue` также реализованы модификаторы событий:

```
<a href="#" @click.prevent="doSomething">
    doSomething
</a>
```

Вот некоторые из них:

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`
- etc

Таким образом можно обрабатывать любые другие события:

- `submit`
- `focus`
- `blur`
- `input`
- `change`
- `click`
- etc

#### Другие, менее используемые директивы:

- [v-pre](https://ru.vuejs.org/v2/api/#v-pre)
- [v-cloak](https://ru.vuejs.org/v2/api/#v-cloak)
- [v-once](https://ru.vuejs.org/v2/api/#v-once)

#### methods

Разумеется, прописывать полную логику работы функций в атрибутах очень больно, поэтому
методы, используемые в приложении можно вынести в отдельный ключ `methods`:

```
<button @click="logName">
    Кнопка
</button>
<button @click="logNumber">
    Кнопка
</button>

...

const app = new Vue({
    el: '#app',
    data() {
        return {
            name: 'Kimi',
        }
    },
    methods: {
        logName() {
            alert(this.name);
        },
        logNumber() {
            this.logName();
            alert(this.number);
        },
    },
});
```

**Важно** <br>
Методы - обычные функции (не стрелочные), так как у стрелочных функций нет контекста
и `this` может работать не так, как ожидается.

#### computed

Во `vue` реализованы так называемые "вычисляемые свойства", пересчитывающиеся каждый раз
при изменении параметров, на которые они опираются:

```
<button
    :class="buttonClasses"
    @click="revertError"
>
    Кнопка
</button>

...

data() {
    return {
        isErrorEnable: true,
    }
},
methods: {
    revertError() {
        this.isErrorEnable = !this.isErrorEnable;
    },
},
computed: {
    // данное свойство пересчитывается каждый раз при изменении ключа isErrorEnable
    buttonClasses() {
        return [ 'button', this.isErrorEnable ? 'button--error' : '' ];
    },
},
```

#### Геттеры/сеттеры в `computed`-свойства

По умолчанию `computed` - свойство-геттер, однако мы можем определить логику работы
приложения также и в момент установки свойства:

```
computed: {
    date: {
        get () {
            // отрабатывает при обращении к свойству
            return this.formatDate(this.date);
        },
        set (value) {
            alert(value);
        },
    },
},
```

***

### Компонентный подход

Компонентный подход - наиболее прогрессивный и удобный способ разработки приложения
на `vue`. <br>
Его суть заключается в том, что код делится на отдельные компоненты, образующие **дерево
компонентов**.

Компонент во `vue` можно реализовать двумя основными способами:

1. `Vue.component`:

```
<div id="app">
    <button-counter></button-counter>
</div>

<script>
    Vue.component('button-counter', {
        data() {
            return {
                count: 0,
            };
        },
        template: '<button @click="count++">Нажато — {{ count }}</button>',
    });

    new Vue({ el: '#app' });
</script>
```

2. В виде одно файлового компонента (в отдельном файле `.vue`)

Например, `./examples/Component.vue`:

```
// html-секция, здесь описан шаблон компонента
<template>
    <button
        :class="buttonClasses"
        @click="revertError"
    >
        Кнопка
    </button>
</template>

// script-секция, мозги компонента
<script>

// экспортируем объект с данными об экземпляре
export default {
    name: 'Component',
    data() {
        return {
            name: 'Kimi',
            number: 42,
            isErrorEnable: true,
        };
    },
    methods: {
        revertError() {
            this.isErrorEnable = !this.isErrorEnable;
        },
    },
    computed: {
        buttonClasses() {
            return [ 'button', this.isErrorEnable ? 'button--error' : '' ];
        },
    },
};
</script>

// style-секция
<style>
.button {
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    padding: 11px 18px;
    border: none;
}

.button--error {
    background: #ff6161;
}
</style>
```

Основными преимуществами данного подхода являются:

- удобство при разработке приложения в виде модульной системы;
- все в одном месте (и шаблон, и данные, и стили);
- интуитивно понятный внешний вид компонента упрощает работу с ним.

Компоненты во `vue` принято именовать с заглавной буквы.