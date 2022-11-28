<template>
    <!--Начало-->
    <div>
        <h3>
            Мои рецепты
        </h3>
        <div class="card">
            <div
                v-if="recipes.length === 0"
                class="recipe-container__no-recipes"
            >
                Рецептов нет
            </div>
            <div
                v-else-if="recipes.length > 0"
                v-for="(recipe, index) in recipes"
                class="card-body">
                <div class="card-body__header">
                    <h4>{{ recipe.recipeName }}</h4>
                    <svg> <VeganIcon/> </svg>
                    {{ recipe.checkedIsVegan }}
                    <svg> <TimeIcon/> </svg>
                    {{ recipe.selectedTime }}
                </div>
                Ингредиенты:
                {{ recipe.ingredients }}
                <button class="btn btn-light card-body__remove-button" @click="$emit('removeRecipe', index)">
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
    name: 'RecipesContainer',
    components: {TimeIcon, VeganIcon},
    props: {
        recipes: {
            type: Array,
            default: () => []
        }
    }
}
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
