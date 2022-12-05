<template>
    <div class="container">
        <Child v-model="name"/>
        <!--        <CommonBlock-->
        <!--            :value="name"-->
        <!--            @input="val => { name = val }"-->
        <!--        />-->


        <!--        <CommonBlock :value="isPopupVisible" v-model="name" />-->
        <!--        <CommonBlock-->
        <!--            :name="name"-->
        <!--            :value="isPopupVisible"-->
        <!--            @change="val => { name = val }"-->
        <!--        />-->
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