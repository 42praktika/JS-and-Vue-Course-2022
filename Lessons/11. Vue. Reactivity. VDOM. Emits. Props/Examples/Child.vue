<template>
    <div class="child-element">
        <div
            v-for="(item, index) in manoolItems"
            :key="item.id"
            @click="$emit('remove', index)" <!--Отправляем данные родителю-->
        >
            {{ item.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Child",
    // Получаем данные от родителя в виде пропа (property)
    props: {
        manoolItems: {
            type: Array,
            default: () => [],
        },
    },
    // Можно использовать и короткую запись
    // props: [ 'manoolItems' ],
};
</script>