<template>
    <div>
        Set data keys in Vue.js
    </div>
</template>

<script>
export default {
    name: "Set",
    data() {
        return {
            name: 'Elon',
            elements: [],
        };
    },
    mounted() {
        this.name = 'some name';
        // vm.name — реактивное поле

        this.text = 'some text';
        // vm.text — не реактивное поле


        // Vue.set(vm, 'text', 'some text');

        // метод для работы в экземпляре компонента
        this.$set(this, 'text', 'some text');


        // Массивы
        // Использование Vue.set
        // Vue.set(vm.elements, index, newValue);

        // Использование this.$set
        // this.$set(this.elements, index, newValue);

        // Использование Array.prototype.splice
        // this.elements.splice(index, 1, newValue);
    },
};
</script>