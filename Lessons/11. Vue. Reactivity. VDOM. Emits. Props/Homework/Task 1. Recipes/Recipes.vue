<template>
    <div class="recipes">
        <!--Начало-->
        <NewRecipeForm
            @addRecipe="addRecipe"
        />
        <RecipesContainer
            :recipes="recipes"
            @removeRecipe="onRemoveRecipe"
        />
        <!--Конец-->
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    // Начало
    components: {
        RecipesContainer,
        NewRecipeForm,
    },
    data() {
        return {
            recipes: [],
        }
    },
    methods: {
        addRecipe(data) {
            this.recipes.push(data);
        },
        onRemoveRecipe(index) {
            this.recipes.splice(index, 1)
        }
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
