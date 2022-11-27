<template>
    <div class="times-container">
      <!--Начало-->
        <div
            v-for="(item, index) in timesItems"
            :key="item.id"
            @click="$emit('remove', index)"
        >
            {{ item.text }}
        </div>

      <!--Конец-->
    </div>

</template>

<script>
export default {
    name: "TimeElement",
    <!--Начало-->
    props: {
        timesItems: {
          type: Array,
          default: () => [],
        },
    },
  <!--Конец-->
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