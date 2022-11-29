<template>
  <div class="recipe-form">
    <h3>
      Создать новый рецепт
    </h3>
    <div class="recipe-form__block">
      <label class="form-label">
        Название нового рецепта
      </label>
      <input type="text" class="form-control recipe-form__name" v-model="recipe.recipeName">
    </div>
    <div class="recipe-form__block">
      <label class="form-label">
        Ингредиенты
      </label>
      <textarea class="form-control recipe-form__ingredients" v-model="recipe.ingredients"></textarea>
    </div>
    <div class="recipe-form__block">
      <label class="form-label">
        Последовательность действий
      </label>
      <textarea class="form-control recipe-form__recipe-text" v-model="recipe.actions"></textarea>
    </div>
    <div class="recipe-form__block"><label class="form-label">
      Время приготовления
    </label>
      <select class="form-select recipe-form__cook-time" v-model="recipe.cookingTime">
        <option v-for="(time, index) in timeOptions"
        :key="index">{{time.text}}
        </option>
      </select>
    </div>
    <div class="recipe-form__block">
      <input type="checkbox" class="form-check-input" v-model="recipe.isVenus">
      <label class="form-check-label">
        Вегетарианское блюдо
      </label>
    </div>
    <div class="recipe-form__block">
      <button class="btn btn-dark recipe-form__add-button" @click="NewRecipe">
        Добавить рецепт
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NewRecipeForm',
    data() {
        return {
            recipe: {
              recipeName: '',
              ingredients: '',
              actions: '',
              cookingTime: '',
              isVenus: '',
            },
            timeOptions: [
                { value: 1, text: '5 минут' },
                { value: 2, text: '10 минут' },
                { value: 3, text: '15 минут' },
                { value: 4, text: '20 минут' },
                { value: 5, text: '30 минут' },
                { value: 6, text: '40 минут' },
                { value: 7, text: '50 минут' },
                { value: 8, text: '1 час' },
                { value: 9, text: '1,5 часа' },
                { value: 10, text: '2 часа' },
                { value: 11, text: '2,5 часа' },
                { value: 12, text: '3 часа' },
                { value: 13, text: 'Бесконечность' },
            ],
        };
    },
    props: ["listOfRecipes"],
    methods: {
      NewRecipe() {
        this.recipe.isVenus = (this.recipe.isVenus === true) ? "Да": "Нет";
        this.listOfRecipes.push(this.recipe)
        this.recipe = {};
      }
    }
};
</script>

<style>
.recipe-form {
    max-width: 350px;
    margin-right: 40px;
}

.recipe-form__block {
    margin-bottom: 15px;
}
</style>