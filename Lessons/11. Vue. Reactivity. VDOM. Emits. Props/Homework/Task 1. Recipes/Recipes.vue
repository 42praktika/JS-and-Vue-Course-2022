<template>
    <div class="recipes">
        <!--Начало-->
        <NewRecipeForm @addRecipe="appendRecipes"></NewRecipeForm>
        <RecipesContainer :recipes="recipes" @delete="deleteRecipe"></RecipesContainer>
        <!--Конец-->
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    // Начало
    components : {
        NewRecipeForm,
        RecipesContainer,
    },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        appendRecipes(recipe) {
            this.recipes.push(recipe);
        },
        deleteRecipe(index) {
            this.recipes.splice(index, 1);
        },
    },
    // Конец
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