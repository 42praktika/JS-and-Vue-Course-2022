<template>
    <div class="time-killer">
        <!--Начало-->
       <button
           type='button'
           @click = 'addTime'
           class="btn btn-warning"
    >
          Добавить время!
    </button>

      <TimeElement
          :items="items"
          @remove="removeTime">
      </TimeElement>

      <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
  name: 'TimeKiller',
    // Начало
    components: {
        TimeElement
    },
    data() {
        return {
        items: [],
        }
    },
    methods: {
        addTime() {
            const currDate = new Date();
            this.items.push(currDate);
        },
        removeTime(index) {
            this.items.splice(index, 1);
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