<template>
  <div class="time-killer">
    <button type="button" class="btn btn-warning" @click="NewDate">Добавить время!</button>
    <TimeElement :listOfDates="listOfDates"></TimeElement>
  </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";
export default {
  name: 'TimeKiller',
  components: {TimeElement},
  data() {
    return {
      listOfDates: [],
    };
  },
  methods: {
    NewDate() {
      const date = new Date;
      this.listOfDates.push(date);
    }
  }
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