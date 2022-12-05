<template>
    <!--Начало-->
    <div>
        <component :is="getCurIcon"></component>
    </div>
    <!--Конец-->
</template>

<script>
import AngryIcon from "./icons/AngryIcon.vue";
import AnnoyedIcon from "./icons/AnnoyedIcon.vue";
import EmbarrassedIcon from "./icons/EmbarrassedIcon.vue";
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
            default: 'happy',
            required: true
        }
    },
    components: {
       AngryIcon,
       AnnoyedIcon,
       EmbarrassedIcon,
       FrustratedIcon,
       HappyIcon,
       SurprisedIcon,
       SickIcon,
       ScaredIcon,
       SadIcon,
       StressedIcon,
       TiredIcon,
       LonelyIcon,
       LovedIcon,
       NervousIcon,
       NeutralIcon
    },
    computed: {
        getCurIcon() {
            return this.iconType[0].toUpperCase() + this.iconType.substring(1) + 'Icon';
        }
    }
    // Конец
};
</script>