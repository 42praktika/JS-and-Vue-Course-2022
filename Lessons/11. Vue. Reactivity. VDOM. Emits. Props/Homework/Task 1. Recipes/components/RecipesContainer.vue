<template>
    <!--Начало-->
    <div class="recipe-container">
        <h3>
            Мои рецепты
        </h3>
        <div class="recipe-container__no-recipes" v-if="recipes.length === 0">
            Рецептов нет
        </div>
        <div v-else v-for="(recipe, index) in recipes" class="card">
            <div class="card-body">
                    <div class="card-body__header">
                        <h4>
                            {{ recipe.title }}
                        </h4>
                        <VeganIcon></VeganIcon>
                        {{ recipe.isVegetarian }}
                        <TimeIcon></TimeIcon>
                        {{ recipe.cookingTime }}
                    </div>
                    Ингредиенты:
                    {{ recipe.ingredients }}
                    <button class="btn btn-light card-body__remove-button" @click="$emit('delete', index)">
                        Удалить рецепт
                    </button>
            </div>
        </div>
    </div>
    <!--Конец-->
</template>

<script>
// Начало
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
    name: 'NewRecipeForm',
    components: {TimeIcon, VeganIcon},
    props: {
        recipes: Array,
    },
};
// Конец
</script>

<style>
.recipe-container svg {
    width: 20px;
    margin-left: 16px;
    margin-right: 5px;
}

.card {
    margin-bottom: 15px;
}

.card-body__header {
    display: flex;
    align-items: center;
}

.recipe-container__no-recipes {
    font-size: 20px;
    margin-top: 15px;
}

.card-body__remove-button {
    display: block;
    margin-top: 10px;
}
</style>