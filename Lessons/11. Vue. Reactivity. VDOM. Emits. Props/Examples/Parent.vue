<template>
    <div class="container">
        <Child
            class="container__child"
            :manool-items="manoolItems" <!--Передаем данные ребенку-->
            @remove="onRemoveManool"    <!--Ловим событие из дочернего компонента-->
        />
        <input v-model="newText"/>
        <button @click="onAddManool">
            Добавить!
        </button>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    name: "Parent",
    components: {
        Child,
    },
    data() {
        return {
            manoolItems: [
                { id: 0, text: 'Один манул' },
                { id: 1, text: 'Два манула' },
                { id: 2, text: 'Три манула' },
                { id: 3, text: 'Четыре манула' },
            ],
            maxIndex: 3,
            newText: '',
        };
    },
    methods: {
        onAddManool() {
            this.maxIndex += 1;
            this.manoolItems.push({ id: this.maxIndex, text: this.newText });
            this.newText = '';
        },
        // описываем событие, переданное из ребенка через $emit
        onRemoveManool(index) {
            this.manoolItems.splice(index, 1);
        },
    },
};
</script>