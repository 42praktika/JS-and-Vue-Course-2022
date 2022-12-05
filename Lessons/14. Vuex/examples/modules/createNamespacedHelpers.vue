<template>
    <div class="create-namespaced-helpers">
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('errandsModule');

export default {
    name: 'createNamespacedHelpers',
    computed: {
        ...mapState([ 'errands' ]),
        ...mapGetters([ 'someGetter' ]),
    },
    methods: {
        ...mapActions([ 'someAction' ]),
    },
};
</script>
