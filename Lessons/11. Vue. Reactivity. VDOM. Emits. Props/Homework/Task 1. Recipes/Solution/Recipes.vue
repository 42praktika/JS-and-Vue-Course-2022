<template>
    <div class="recipes">
        <NewRecipeForm @add="onAddRecipe"/>
        <RecipesContainer
            :recipes="recipes"
            @remove="onRemoveRecipe"
        />
    </div>
</template>

<script>
import RecipesContainer from './components/RecipesContainer.vue';
import NewRecipeForm from './components/NewRecipeForm.vue';

export default {
    name: 'Recipes',
    components: {
        RecipesContainer,
        NewRecipeForm,
    },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        onAddRecipe(recipe) {
            this.recipes.push(recipe);
        },
        onRemoveRecipe(recipeId) {
            this.recipes = this.recipes.filter(({ id }) => id !== recipeId);
        },
    },
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