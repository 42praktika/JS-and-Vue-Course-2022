<template>
    <component :is="iconType"/>
</template>

<script>
import angry from './icons/AngryIcon.vue';
import annoyed from './icons/AnnoyedIcon.vue';
import embarrassed from './icons/EmbarrassedIcon.vue';
import excited from './icons/ExcitedIcon.vue';
import frustrated from './icons/FrustratedIcon.vue';
import happy from './icons/HappyIcon.vue';
import lonely from './icons/LonelyIcon.vue';
import loved from './icons/LovedIcon.vue';
import nervous from './icons/NervousIcon.vue';
import neutral from './icons/NeutralIcon.vue';
import sad from './icons/SadIcon.vue';
import sick from './icons/SickIcon.vue';
import stressed from './icons/StressedIcon.vue';
import surprised from './icons/SurprisedIcon.vue';
import tired from './icons/TiredIcon.vue';

export default {
    name: 'ItisIcon',
    components: {
        angry,
        annoyed,
        embarrassed,
        excited,
        frustrated,
        happy,
        lonely,
        loved,
        nervous,
        neutral,
        sad,
        sick,
        stressed,
        surprised,
        tired,
    },
    props: {
        iconType: {
            type: String,
            default: 'surprised',
        },
    },
};
</script>