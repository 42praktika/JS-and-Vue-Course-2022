<template>
  <div class="time-container">
    <div @mouseover="DeleteDate(index)" class="times-container__item" v-for="(date, index) in listOfDates"
    :key="index">
      {{date}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeElement",
  props: ['listOfDates'],
  methods: {
    DeleteDate(index) {
      this.listOfDates.splice(index, 1);
    }
  }
};
</script>

<style>
.times-container__item {
  padding: 10px;
  margin-bottom: 10px;
  background: #fffdb1;
  border: 1px solid #e1dfa2;
  border-radius: 4px;
}
</style>