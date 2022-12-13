<template>
    <div class="recipe-form">
        <h3>
            Создать новый рецепт
        </h3>
        <div class="recipe-form__block">
            <label class="form-label">
                Название нового рецепта
            </label>
            <input
                type="text"
                class="form-control recipe-form__name"
                v-model="name"
            >
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Ингредиенты
            </label>
            <textarea
                class="form-control recipe-form__ingredients"
                v-model="ingredients"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Последовательность действий
            </label>
            <textarea
                class="form-control recipe-form__recipe-text"
                v-model="recipeText"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Время приготовления
            </label>
            <select
                class="form-select recipe-form__cook-time"
                v-model="cookTimeValue"
            >
                <option
                    v-for="option in timeOptions"
                    :value="option.value"
                    :key="option.value"
                >
                    {{ option.text }}
                </option>
            </select>
        </div>
        <div class="recipe-form__block">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="isVegan"
            >
            <label class="form-check-label">
                Вегетарианское блюдо
            </label>
        </div>
        <div class="recipe-form__block">
            <button
                class="btn btn-dark recipe-form__add-button"
                @click="addRecipe"
            >
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
            name: '',
            recipeText: '',
            cookTimeValue: 1,
            ingredients: '',
            isVegan: false,
            maxId: 0,
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
    methods: {
        addRecipe() {
            const { name, recipeText, cookTimeValue, ingredients, isVegan } = this;
            const cookTimeText = this.getTimeOptionText(cookTimeValue);

            const newRecipe = {
                name,
                recipeText,
                cookTime: cookTimeText,
                ingredients,
                isVegan,
                id: this.maxId,
            };
            this.maxId += 1;
            this.$emit('add', newRecipe);
            this.clearFields();
        },
        clearFields() {
            this.name = '';
            this.recipeText = '';
            this.cookTimeValue = 1;
            this.ingredients = '';
            this.isVegan = false;
        },
        getTimeOptionText(selectedValue) {
            return this.timeOptions
                .find(({ value }) => value === selectedValue)
                .text;
        },
    },
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