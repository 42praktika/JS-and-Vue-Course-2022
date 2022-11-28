<template>
    <div class="time-killer">
        <!--Начало-->
        <button
            type="button"
            class="btn btn-warning"
            @click="onAddTime"
        >
            Добавить время!
        </button>
        <TimeElement
            :times-items="timesItems"
            @mouseover="mouseover"
        />
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";
export default {
    name: 'TimeKiller',
    components: {TimeElement},
    data () {
        return {
            timesItems: [],
            maxIndex: 0,
        };
    },
    methods: {
        onAddTime () {
            this.timesItems.push({ id: this.maxIndex, text: 'Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)' });
            this.maxIndex += 1;
        },
        mouseover (index) {
            this.timesItems.splice(index, 1)

        },
    },

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