<template>
    <div class="times-container">
      <!--Начало-->
        <div
            class="times-container__item"
            v-for="(item, index) in timesItems"
            :key="item.id"
            @mouseover="$emit('mouseover', index)"
        >
            {{ item.text }}
        </div>

      <!--Конец-->
    </div>

</template>

<script>
export default {
    name: "TimeElement",
    props: {
        timesItems: {
            type: Array,
            default: () => [],
        },
    },

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