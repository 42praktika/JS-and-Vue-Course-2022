<template>
    <div>
        NextTick
    </div>
</template>

<script>
export default {
    name: 'NextTick',
    data() {
        return {
            groups: [],
        };
    },
    watch: {
        groups: function () {
            this.$nextTick(() => {
                renderTooltip(this);
            });
        },
    },
    updated() {
        if (this.shouldDestroy) {
            this.$destroy();
        } else {
            this.$forceUpdate();
        }
    },
};
</script>