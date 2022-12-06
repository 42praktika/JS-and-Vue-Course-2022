<template>
    <div class="container">
        <template v-slot:[slotName]="{ user }">
            {{ user.name }}
        </template>
    </div>
</template>

<script>
export default {
    name: "Child",
    data() {
        return {
            slotName: 'header',
        };
    },
};
</script>