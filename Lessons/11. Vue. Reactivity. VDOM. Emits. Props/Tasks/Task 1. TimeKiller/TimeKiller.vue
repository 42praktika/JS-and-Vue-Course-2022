<template>
     <div class = "time-killer">
          <button
              type = "button"
              class = "btn btn-warning"
              @click = "addTime">
            Добавить время!
          </button>
          <TimeElement
              :dates = "dates"
              @remove = "onRemoveDate"/>
     </div>

</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
  name: "TimeElement",
  components: {
       TimeElement
   },
  data() {
    return {
      dates: []
    };
  },
  methods: {
    addTime() {
      const newData = new Date;
      this.dates.push(newData);
      this.dates = this.dates.slice();
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