<template>
    <input
        :value="value"
        type="text"
        @input="handleInputName"
    >
</template>

<script>
export default {
    name: "Child",
    props: {
        value: String,
        default: '',
    },
    methods: {
        handleInputName(value) {
            this.$emit('input', value);
        },
    },

    // model: {
    //     prop: 'name',
    //     event: 'change',
    // },
    // props: {
    //     name: {
    //         type: String,
    //         default: ''
    //     },
    //     value: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    // methods: {
    //     handleInputName(value) {
    //         this.$emit('change', value);
    //     }
    // }
};
</script>