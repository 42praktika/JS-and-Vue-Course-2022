<template>
    <div class="recipes">
      <NewRecipeForm :listOfRecipes="listOfRecipes"></NewRecipeForm>
      <RecipesContainer :listOfRecipes="listOfRecipes"></RecipesContainer>
    </div>
</template>

<script>
import RecipesContainer from "./components/RecipesContainer.vue";
import NewRecipeForm from "./components/NewRecipeForm.vue";
export default {
    name: 'Recipes',
    components: {NewRecipeForm, RecipesContainer},
    data() {
      return {
        listOfRecipes: [],
      };
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