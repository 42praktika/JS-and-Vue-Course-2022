<template>
    <div class="times-container__item" v-for="date in dates">{{date}}
    </div>
</template>

<script>
export default {
  name: "TimeElement.vue",
  props: ['dates'],
}
</script>

<style scoped>
.times-container__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fffdb1;
    border: 1px solid #e1dfa2;
    border-radius: 4px;
}
</style>