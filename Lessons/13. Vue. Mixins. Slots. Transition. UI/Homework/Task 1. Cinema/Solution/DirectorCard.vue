<template>
    <CardBlock>
        <template #image>
            <img :src="director.image"/>
        </template>
        <template #info>
            <div class="director__info-name">
                {{ director.name }}
            </div>
            <div>
                <span class="director__title">
                    Возраст:
                </span>
                {{ director.age }}
            </div>
            <div>
                <span class="director__title">
                    Место рождения:
                </span>
                {{ director.birthPlace }}
            </div>
            <div>
                <span class="director__title">
                    Фильмы:
                </span>
                {{ director.movies }}
            </div>
        </template>
    </CardBlock>
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
    name: 'DirectorCard',
    components: { CardBlock },
    props: {
        director: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style>
.director__info-name {
    font-size: 18px;
    font-weight: bold;
}

.director__title {
    font-size: 16px;
    font-weight: bold;
}
</style>