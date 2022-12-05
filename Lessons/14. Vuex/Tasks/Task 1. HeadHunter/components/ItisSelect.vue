<template>
    <select
        class="form-select"
        @change="handleChange"
    >
        <option
            v-for="option in options"
            :key="option.id"
            :value="option.id"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "ItisSelect",
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleChange({ target }) {
            this.$emit('change', target.value);
        },
    },
};
</script>