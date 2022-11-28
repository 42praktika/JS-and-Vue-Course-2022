<template>
<div class="times-container">
    <div
        v-for="(item,index) in items"
        @mouseover="$emit('remove', index)"
        class="times-container__item"
    >
    {{item}}
</div>
</div>
</template>

<script>
export default {
    name: "TimeElement",
    props: {
            items: {
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