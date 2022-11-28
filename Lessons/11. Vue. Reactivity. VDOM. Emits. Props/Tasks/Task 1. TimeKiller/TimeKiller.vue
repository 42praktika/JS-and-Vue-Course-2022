<template>
    <div class="time-killer">
      <button type="button" class="btn btn-warning"@click="addDate">Добавить время!</button>
       <div class="time-container">
         <TimeElement :dates = 'dates' @mouseover="remove"> </TimeElement>
       </div>
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
    name: 'TimeKiller',
  components: {TimeElement},
   data(){
      return {
        dates:[]
      }
      },

  // Начало
methods: {
      addDate(){
      let nowDate = new Date();
      this.dates.push(nowDate);
      },
  remove(){
        this.dates.remove();
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