<template>
    <div class="recipes">
        <NewRecipeForm @addRecipe="addRecipe"/>
        <RecipesContainer :recipes="recipes"
                          @deleteRecipe="deleteRecipe"
        />
    </div>
</template>

<script>
import {v4 as uuid} from 'uuid';
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    components: {RecipesContainer, NewRecipeForm},
    data() {
        return {
            recipes: [],
            recipeTimes: ['5 минут', '10 минут', '15 минут', '20 минут', '30 минут', '40 минут', '50 минут', '1 час',
                '1,5 часа', '2 часа', '2,5 часа', '3 часа', 'Бесконечность']
        }
    },
    methods: {
        deleteRecipe(id) {
            this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        },
        addRecipe(recipeInfo) {
            this.recipes.push(
                {
                    id: uuid(),
                    name: recipeInfo.name,
                    isVegan: recipeInfo.isVegan ? 'Да' : 'Нет',
                    cookingTime: this.recipeTimes[Number(recipeInfo.cookingTime) - 1],
                    ingredients: recipeInfo.ingredients
                }
            )
        }
    }
};
</script>

<style>
.recipes {
    width: 1000px;
    margin: 40px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
}

.recipes > div {
    width: 50%;
}
</style>