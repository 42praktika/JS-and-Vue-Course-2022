<template>
  <div class="times-container">
    <div class="times-container__item" v-for="date in dates">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: "TimeElement",
  props: [ 'dates' ]
};
</script>