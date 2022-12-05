<template>
    <div class="icons">
        <ItisIcon :icon-type="iconType"/>
        <span class="icons__type">
            I'm {{ iconType }}
        </span>
        <button
            class="btn btn-light btn-lg"
            @click="randomIcon"
        >
            Сменить эмоцию!
        </button>
    </div>
</template>

<script>
import ItisIcon from './ItisIcon.vue';

export default {
    name: 'IconCarousel',
    components: {
        ItisIcon,
    },
    data() {
        return {
            iconType: 'happy',
            iconOptions: [
                'angry',
                'annoyed',
                'embarrassed',
                'excited',
                'frustrated',
                'happy',
                'lonely',
                'loved',
                'nervous',
                'neutral',
                'sad',
                'sick',
                'stressed',
                'surprised',
                'tired',
            ],
            amountOfOptions: 0,
        };
    },
    mounted() {
        this.amountOfOptions = this.iconOptions.length;
    },
    methods: {
        randomIcon() {
            const iconIndex = this.getRandomInt(0, this.amountOfOptions);
            this.iconType = this.iconOptions[iconIndex];
        },
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
    },

};
</script>

<style>
.icons {
    margin: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.icons__type {
    margin-bottom: 24px;
    font-size: 24px;
}

.icons svg {
    transform: scale(3);
    margin-bottom: 100px;
    margin-top: 150px;
}
</style>