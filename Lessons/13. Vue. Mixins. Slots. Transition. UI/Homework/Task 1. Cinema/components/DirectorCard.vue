<template>
    <!--Начало-->
    <card-block>
        <template v-slot:image>
            <img :src="director.image">
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
    </card-block>
    <!--Конец-->
</template>

<script>
import CardBlock from './CardBlock.vue';
import Templates from "../../../../12. Vue. Properties. Refs. Modal/Examples/templates.html";

export default {
    name: 'DirectorCard',
    components: {Templates, CardBlock },
    // Начало
    props: {
        director: {
          required: true,
          default: () => {}
        },
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