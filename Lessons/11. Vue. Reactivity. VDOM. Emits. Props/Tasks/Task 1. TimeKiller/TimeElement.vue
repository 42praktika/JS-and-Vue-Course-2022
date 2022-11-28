<template>
    <div class="times-container">
        <div class="times-container__item"
        v-for="(date, index) in dates"
        @mouseover="$emit('remove', index)">
            {{ date }}
        </div>
    </div>
</template>

<script>
export default {
  name: "TimeElement",
  props: [ 'dates' ]
};
</script>