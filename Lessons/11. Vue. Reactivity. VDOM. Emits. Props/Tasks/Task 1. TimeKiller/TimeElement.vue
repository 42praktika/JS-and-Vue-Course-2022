<template>
    <div class="times-container">
        <div class="times-container__item" v-for="time in times"
             :key="time.id"
             @mouseover="deleteTime(time.id)"
        >
            {{time.text}}
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeElement",
    props: {
        times: {
            type: Array,
            required: true,
        },
    },
    methods: {
        deleteTime(id) {
            this.$emit('deleteTime', id);
        }
    }
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