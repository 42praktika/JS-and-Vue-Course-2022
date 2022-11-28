<template>
      <div class="time-container">
              <div
                class = "time-container__item"
                v-for = "data in dates">
                {{ data }}
              </div>
      </div>
</template>

<script>
export default {
  name: "TimeElement",
  props: {
      dates: {
           type: Array,
           default: () => []
      }
  }
};
</script>

<style scoped>

</style>