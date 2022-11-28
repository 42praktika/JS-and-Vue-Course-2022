<template>
    <div class="time-killer">
        <!--Начало-->
        <button type="button" class="btn btn-warning" @click="addTime">
            Добавить время!
        </button>
        <div class="time-container">
            <TimeElement :dates="dates" @mouseover="removeTime"></TimeElement>
        </div>
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from './TimeElement.vue';

export default {
    name: 'TimeKiller',
    // Начало
    components: { 
        TimeElement, 
    },
    data() {
        return {
            dates:[],
        };
    },

    methods: {
        addTime() {
            let currentDate = new Date();
            this.dates.push(currentDate);
        },
        removeTime(index){
            this.dates.splice(index, 1);
        },
    }
    // Конец
};
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}
</style>