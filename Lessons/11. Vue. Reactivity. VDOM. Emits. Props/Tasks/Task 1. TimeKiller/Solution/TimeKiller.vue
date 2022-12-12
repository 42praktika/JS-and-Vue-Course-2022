<template>
    <div class="time-killer">
        <button
            type="button"
            class="btn btn-warning"
            @click="onAddTime"
        >
            Добавить время!
        </button>
        <TimeElement
            :times="times"
            @kill="onKillTime"
        />
    </div>

</template>

<script>
import TimeElement from './TimeElement.vue';

export default {
    name: 'TimeKiller',
    components: { TimeElement },
    data() {
        return {
            times: [],
            maxId: 0,
        };
    },
    methods: {
        onAddTime() {
            this.maxId += 1;
            const newTime = new Date();
            this.times.push({ id: this.maxId, time: newTime });
        },
        onKillTime(timeId) {
            this.times = this.times.filter(({ id }) => id !== timeId);
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