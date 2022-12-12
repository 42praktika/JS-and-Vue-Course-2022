<template>
    <!--Начало-->
<CardBlock>
  <template v-slot:img>
    <img :src='director.image' alt="img">
  </template>
  <template v-slot:info>
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
    <!--Конец-->
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
    name: 'DirectorCard',
    components: { CardBlock },
    // Начало
props: {
  director:{
    id: Number,
    name: String,
    image: String,
    age: Number,
    birthPlace: String,
    movies: String
  },
  default:{},
  required: true
}
    // Конец
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