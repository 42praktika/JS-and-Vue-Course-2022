<template>
    <div class="recipes">
        <NewRecipeForm @addRecipe="addRecipe"/>
        <RecipesContainer :recipes="recipes"
                          @deleteRecipe="deleteRecipe"
        />
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    components: {RecipesContainer, NewRecipeForm},
    data() {
        return {
            recipes: [],
        }
    },
    methods: {
        deleteRecipe(id) {
            this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        },
        addRecipe(recipeInfo) {
            this.recipes.push(recipeInfo)
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