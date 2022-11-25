### 1. Методы экземпляра — жизненный цикл - императивный подход

В каждом экземпляре компонента доступен ряд методов

- `vm.$mount` - метод для монтирования элемента:

```
const Component = Vue.extend({
    template: '<span>Я компонент</span>';
})

// Создаём экземпляр и заменяем на него элемент в #some-id
new Component().$mount('#some-id')
```

- `vm.$destroy` - уничтожает переданный компонент (удаляет из `DOM`-дерева)

```
<script>
export default {
    name: "Component",
    updated() {
        this.$destroy();
    },
</script>
```

- `vm.$forceUpdate` - насильно перерисовывает текущий компонент
- `vm.$nextTick` - вызывает переданную функцию после очередного обновления `DOM`:

```
watch: {
    groups: function () {
        this.$nextTick(() => {
            // Отработает строго после очередного обновления DOM
            renderTooltip(this);
        });
    },
},
```

***

### 2. Свойства экземпляра

- `vm.$data` - объект `data` компонента, содержит все ключи;
- `vm.$props` - пропы компоненте;
- `vm.$el` - текущий элемент;
- `vm.$options` - опции, переданные в конструктор экземпляра;
- `vm.$slots` (подробнее см. в следующем уроке);
- `vm.$scopedSlots` (подробнее см. в следующем уроке);
- `vm.$refs` (подробнее см. ниже);
- `vm.$isServer` - запущен ли данный экземпляр на сервере;
- `vm.$listeners` - массив обработчиков событий созданных через `v-on`;
- `vm.$root` - ссылка на корневой элемент в дереве компонентов;
- `vm.$parent` (подробнее см. ниже);
- `vm.$children` - массив ссылок на дочерние компоненты.

#### $refs

Данное свойство позволяет обращаться к элементам в `template`. <br>
При этом обращаться можно как стандартным `html`-тегам, так и к используемым в `template`
дочерним компонентам.

```
<template>
    <div class="container">
        <div ref="description">
            Описание страницы
        </div>
        <UserBlock ref="userBlock"/>
    </div>
</template>

<script>
import UserBlock from './UserBlock';
export default {
    name: 'Element',
    components: {
        UserBlock,
    },
    data: () => ({
    }),
    mounted() {
        // обращаемся к элементу и берем у него высоту
        const descriptionHeight = this.$refs.description.offsetHeight;
        
        // обращаемся к дочернему компоненту и используем какие-то данные внутри него
        // например, вызываем какой-либо метод
        this.$refs.userBlock.updateUser();
    }
}
</script>
```

#### $parent [самостоятельное изучение]

Обращение к родительскому элементу:

```
<script>
export default {
    mounted() {
        this.containerHeight = this.$parent.getHeight();
    }
}
</script>
```

***

### 3. Templates

Шаблоны в шаблонах - способ определить логику на родительском элементе без добавления
самого элемента

```
<template>
    <section>
        <h2>Заголовок</h2>
        <template v-if="isIconShown">
           <Icon/>
        </template>
    </section>
</template>
```

Здесь сам `template` не будет отображаться в `DOM`-дереве, то есть если `v-if`
будет `true`, `DOM`-дерево будет иметь следующую структуру:

```
<template>
    <section>
        <h2>Заголовок</h2>
        <svg/>
    </section>
</template>
```

***

### 4. Совместное использование v-if и v-for

При необходимости фильтрации элементов массива появляется соблазн использовать `v-if`
и `v-for` вместе:

```
<div>
    <span
        v-for="student in students"
        v-if="student.hasProject"
    >
        {{ student.name }}
    </span>
</div>
```

Данный подход имеет следующий недостаток - так как `v-for` имеет бОльший приоритет, при
отрисовке массива`vue` в любом случае пройдется по всем элементам (что затратно с точки
зрения использования ресурсов)

Данную проблему можно решить двумя способами:

1. Для случаев с общим условием для всех элементов массива - выноc `v-if` на родительский
   элемент:

Заменяем

```
<div>
    <span
        v-for="student in students"
        v-if="showStudents"
    >
        {{ student.name }}
    </span>
</div>
```

на

```
<div v-if="showStudents">
    <span v-for="student in students">
        {{ student.name }}
    </span>
</div>
```

2. Для случаев с уникальными условиями для каждого элемента массива - фильтрация массива
   в `computed`-свойстве:

```
<div>
    <span
        v-for="student in students"
        v-if="student.hasProject"
    >
        {{ student.name }}
    </span>
</div>
```

на

```
<div>
    <span v-for="student in currentStudents">
        {{ student.name }}
    </li>
</ul>

...
computed: {
    currentStudents() {
        return this.students.filter(({ hasProject }) => hasProject);
    }
}
...
```

***

### 5. Динамические компоненты - component is [самостоятельное изучение]

Динамические компоненты - один из способов повышения гибкости при разработке приложений
на `vue`. <br>
Данный метод применяется для случаев, когда в конкретном месте шаблона необходимо
отображать разные компоненты, а вариант с `v-if/v-else` неуместен, так как таких
компонентов может быть много.

```
<template>
    <component
        :is="isMobile ? 'MobileButton' : 'CommonButton'"
        @click="showFilter"
    />
</template>

<script>
// Импортируем возможные компоненты
import CommonButton from './CommonButton';
import MobileButton from './MobileButton';

export default {
    name: 'Filter',
    components: {
        CommonButton,
        MobileButton,
    },
    props: {
        theme: {
            type: String,
            default: 'mobile',
        },
    },
    computed: {
        isMobile() {
            return this.theme === 'mobile';
        },
    },
}
</script>
```

***

### 6. Создание кастомных директив

Для низкоуровневых операций с `DOM`-деревом может быть уместно создание своих директив,
которые будут добавляться к элементам в шаблоне аналогично встроенным директивам (`v-bind`
, `v-show` и т.д.)

Создадим директиву `v-trim`, очищающую содержимое элемента от концевых пробелов:

```
// Создаем директиву `v-trim` глобально
Vue.directive('trim', {
    inserted: (element) => {
        // element - элемент, на котором мы установили нашу директиву
        const elementText = element.textContent;
        element.textContent = elementText.trim();
    }
})
```

```
// Создаем директиву `v-trim` в компоненте
<script>
export default {
    name: 'Component',
    directives: {
        trim: {
            inserted: (element) => {
                // element - элемент, на котором мы установили нашу директиву
                const elementText = element.textContent;
                element.textContent = elementText.trim();
            }
        }
    }
}
</script>
```

Используем директиву:

```
<template>
    <div v-trim>
        {{ description }}
    </div>
</template>
```

Ключ `inserted` позволяет описать логику, которая выполнится после вставки текущего
элемента внутрь родительского. Есть и другие моменты в жизненном цикле директивы:

- `bind` - вызывается в момент связывания директивы с элементом;
- `update` - вызывается после обновления компонента-контейнера;
- `componentUpdated` - вызывается после обновления компонента-контейнера или его дочерних
  компонентов;
- `unbind` - вызывается в момент открепления директивы от элемента.

Также в директиву можно передать данные (в том числе и динамически). Делается при помощи
аргумента `bindings`:

```
<template>
    <div v-color:[opacity]="'#000000'">
        {{ description }}
    </div>
</template>

<script>
export default {
    name: 'Component',
    directives: {
        color: {
            inserted: (element, bindings) => {
                // bindings.value - статическое свойство, передаем один раз
                element.style.color = bindings.value;
                
                // bindings.arg - динамическое свойство, будет обновляться при обновлении в компоненте
                element.style.opacity = bindings.arg;
            }
        }
    }
}
</script>
```

***

### 7. Фрагменты [самостоятельное изучение]

`Vue` `3` версии позволяет устанавливать несколько корневых элементов в шаблон:

```
<template>
    <section class="header-section"></section>
    <section class="main-section"></section>
    <section class="footer-section"></section>
</template>
```

`Vue` `2` такой возможности "из коробки" не предоставляет, однако данный момент можно
обойти:

1. **[Fragment](https://www.npmjs.com/package/vue-fragment)**

```
<template>
    <fragment>
        <tr class="element-one"></tr>
        <tr class="element-two"></tr>
        <tr class="element-three"></tr>
        <tr class="element-four"></tr>
    </fragment>
</template>

<script>
import Vue from 'vue';
import {Plugin} from 'vue-fragment';
Vue.use(Plugin);
...
```

2. **[vue-frag](https://www.npmjs.com/package/vue-frag)**

```
<template>
    <div v-frag>
        <tr class="element-one"></tr>
        <tr class="element-two"></tr>
        <tr class="element-three"></tr>
        <tr class="element-four"></tr>
    </div>
</template>

<script>
import frag from "vue-frag";

export default {
    name: "SomeComponent",
    directives: {
        frag
    },
}
```

***

### 8. Инъекция зависимостей - provide / inject

Данные опции позволяют делать описанные в родителе данные доступными во всех дочерних
компонентах. Применяется в случаях, если какие-то данные необходимо "пробросить" к
дочернему компоненту через множество других промежуточных компонентов.

Использование:

Компонент-родитель

```
<script>
export default {
    name: "Parent",
    
    provide: {
        userName: 'Michael Scott'
    },
}
```

Компонент-ребенок

```
<script>
export default {
    name: "Child",
    
    // Получаем данные в дочернем компоненте
    inject: [ 'userName' ],
    
    // также можно указать дефолтное значение
    inject: {
        userName: { default: 'Dwight Schrute' }
    }
}
```

***

### 9. Создание модальных окон на Vue

Модальные окна на `Vue` могут быть созданы множеством способов - от кастомных решений до
использования специальных библиотек

В директории `./examples/Modal.vue` представлен пример создания модальных окон при помощи
[vue-js-modal](https://www.npmjs.com/package/vue-js-modal)