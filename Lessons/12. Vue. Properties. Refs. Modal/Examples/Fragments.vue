<template>
    <fragment>
        <tr class="element-one"></tr>
        <tr class="element-two"></tr>
        <tr class="element-three"></tr>
        <tr class="element-four"></tr>
    </fragment>
    <!--    <div v-frag>-->
    <!--        <tr class="element-one"></tr>-->
    <!--        <tr class="element-two"></tr>-->
    <!--        <tr class="element-three"></tr>-->
    <!--        <tr class="element-four"></tr>-->
    <!--    </div>-->
</template>

<script>
import Vue from 'vue';
import { Plugin } from 'vue-fragment';

Vue.use(Plugin);

// import frag from "vue-frag";

export default {
    name: 'Fragments',
    directives: {
        frag,
    },
};
</script>