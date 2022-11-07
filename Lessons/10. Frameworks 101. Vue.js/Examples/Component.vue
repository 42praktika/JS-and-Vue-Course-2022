<template>
    <button
        :class="buttonClasses"
        @click="revertError"
    >
        Кнопка
    </button>
</template>

<script>
export default {
    name: 'Component',
    data() {
        return {
            name: 'Kimi',
            number: 42,
            isErrorEnable: true,
        };
    },
    methods: {
        revertError() {
            this.isErrorEnable = !this.isErrorEnable;
        },
    },
    computed: {
        buttonClasses() {
            return [ 'button', this.isErrorEnable ? 'button--error' : '' ];
        },
    },
};
</script>

<style>
.button {
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    padding: 11px 18px;
    border: none;
}

.button--error {
    background: #ff6161;
}
</style>