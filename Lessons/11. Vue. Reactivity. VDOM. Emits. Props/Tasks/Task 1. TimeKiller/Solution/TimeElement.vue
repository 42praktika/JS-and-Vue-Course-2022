<template>
    <div class="times-container">
        <div
            class="times-container__item"
            v-for="time in times"
            :key="`${time.time}-${time.id}`"
            @mouseover="$emit('kill', time.id)"
        >
            {{ time.time }}
        </div>
    </div>

</template>

<script>
export default {
    name: "TimeElement",
    props: {
        times: {
            type: Array,
            default: () => [],
        },
    },
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