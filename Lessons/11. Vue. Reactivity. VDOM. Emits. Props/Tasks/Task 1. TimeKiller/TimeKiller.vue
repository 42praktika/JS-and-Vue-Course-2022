<template>
    <div class="time-killer">
        <!--Начало-->
        <button type="button" class="btn btn-warning" @click="appendDate">Добавить время!</button>
        <TimeElement :dates="dates"></TimeElement>
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
    name: 'TimeKiller',
    // Начало
    components: {
      TimeElement,
    },
    data() {
      return {
        dates: []
      };
    },
    methods: {
      appendDate() {
        const date = new Date();
        this.dates.push(date);
        this.dates = this.dates.slice();
      }
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