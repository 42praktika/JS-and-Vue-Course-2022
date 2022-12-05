<template>
    <!--Начало-->
    <component
        :is="currentIcon"
    />
    <!--Конец-->
</template>

<script>
import AngryIcon from "./icons/AngryIcon.vue";
import AnnoyedIcon from "./icons/AnnoyedIcon.vue";
import EmbarrassedIcon from "./icons/EmbarrassedIcon.vue";
import ExcitedIcon from "./icons/ExcitedIcon.vue";
import FrustratedIcon from "./icons/FrustratedIcon.vue";
import HappyIcon from "./icons/HappyIcon.vue";
import LonelyIcon from "./icons/LonelyIcon.vue";
import LovedIcon from "./icons/LovedIcon.vue";
import NervousIcon from "./icons/NervousIcon.vue";
import NeutralIcon from "./icons/NeutralIcon.vue";
import SadIcon from "./icons/SadIcon.vue";
import ScaredIcon from "./icons/ScaredIcon.vue";
import SickIcon from "./icons/SickIcon.vue";
import StressedIcon from "./icons/StressedIcon.vue";
import SurprisedIcon from "./icons/SurprisedIcon.vue";
import TiredIcon from "./icons/TiredIcon.vue";

export default {
    name: 'ItisIcon',
    // Начало
    props: {
        iconType: {
            type: String,
            default: () => 'happy',
        },
    },
    computed: {
        currentIcon() {
            console.log(this.iconType);
            const name = this.iconType[0].toUpperCase() + this.iconType.slice(1, this.iconType.length);
            return () => import(`./icons/${name}Icon.vue`);
        },
    },
    // Конец
};
</script>