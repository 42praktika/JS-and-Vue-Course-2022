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
            :date-items="dateItems"
            @remove="onRemoveDate"
        />
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
    name: 'TimeKiller',
    // Начало
    components: { TimeElement },
    data() {
        return {
            dateItems: [],
        }
    },
    methods: {
        onAddTime() {
            const newDate = new Date;
            this.dateItems.push(newDate);
        },
        onRemoveDate(index) {
            this.dateItems.splice(index, 1);
        },
    },
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
