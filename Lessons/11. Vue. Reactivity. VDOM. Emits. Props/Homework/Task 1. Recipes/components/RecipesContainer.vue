<template>
  <div class="recipe-container">
    <h3>
      Мои рецепты
    </h3>
    <div class="card" v-for="(recipe, index) in listOfRecipes"
    :key="index">
      <div class="card-body">
        <div class="card-body__header">
          <h4>
            {{recipe.recipeName}}
          </h4>
          <VeganIcon></VeganIcon>
          {{recipe.isVenus}}
          <TimeIcon></TimeIcon>
          {{recipe.cookingTime}}
        </div>
        Ингредиенты:
        {{recipe.ingredients}}
        <button class="btn btn-light card-body__remove-button" @click="deleteRecipe(index)">
          Удалить рецепт
        </button>
      </div>
    </div>
    <div class="recipe-container__no-recipes" v-if="listOfRecipes.length === 0">
      Рецептов нет
    </div>
  </div>
</template>

<script>
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";
export default {
  name: 'RecipesContainer',
  components: {TimeIcon, VeganIcon},
  props: ["listOfRecipes"],
  methods: {
    deleteRecipe(index) {
      this.listOfRecipes.splice(index, 1)
    }
  }
};
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