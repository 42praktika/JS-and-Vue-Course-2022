<template>
    <div class="container">
        <Child @save="onSave">
            Сохранить
        </Child>




        <!--        Именованные слоты-->
        <!--        <Child>-->
        <!--            <template v-slot:header> - header - имя слота-->
        <!--                <h2>{{ headerText }}</h2>-->
        <!--            </template>-->

        <!--            <p>Какой-то текст</p>-->

        <!--            <template v-slot:default>-->
        <!--                <p>Какой-то текст</p>-->
        <!--            </template>-->

        <!--            <template #footer>-->
        <!--                <p>Ссылка на Гитхаб</p>-->
        <!--            </template>-->
        <!--        </Child>-->





        <!--        Передача данных в слоты-->
        <!--        <Child @save="onSave">-->
        <!--            <template v-slot:default="currentProps">-->
        <!--                {{ currentProps.user.name }}-->
        <!--            </template>-->
        <!--        </Child>-->

        <!--        Или-->
        <!--        <template v-slot="{ user }">-->
        <!--            {{ user.name }}-->
        <!--        </template>-->
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
            name: '',
            isPopupVisible: false,
        };
    },
};
</script>