<template>
  <!--Начало-->
  <CardBlock>
    <template v-slot:img>
      <img :src="movie.image" alt="img">
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
  </CardBlock>
  <!--Конец-->
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
  name: 'MovieCard',
  components: {CardBlock},
  // Начало
  props: {
    movie: {
      id: Number,
      name: String,
      image: String,
      director: String,
      year: Number,
      genre: String
    },
    default:{},
    required: true
  }
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