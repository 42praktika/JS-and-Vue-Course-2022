<template>
    <!--Начало-->
    <card-block>
        <template v-slot:image>
            <img :src="movie.image">
        </template>
        <template v-slot:info>
            <div class="movie__info-name">
                {{ movie.name }}
            </div>
            <div>
                <span class="movie__title">
                    Год:
                </span>
                {{ movie.year }}
            </div>
            <div>
                <span class="movie__title">
                    Режиссер:
                </span>
                {{ movie.director }}
            </div>
            <div>
                <span class="movie__title">
                    Жанр:
                </span>
                {{ movie.genre }}
            </div>
        </template>
    </card-block>
    <!--Конец-->
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
    name: 'MovieCard',
    components: { CardBlock },
    // Начало
    props:['movie']
    // Конец
};
</script>

<style>
.movie__info-name {
    font-size: 18px;
    font-weight: bold;
}

.movie__title {
    font-size: 16px;
    font-weight: bold;
}
</style>