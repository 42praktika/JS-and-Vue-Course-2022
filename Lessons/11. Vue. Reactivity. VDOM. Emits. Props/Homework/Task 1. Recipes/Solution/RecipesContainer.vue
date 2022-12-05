<template>
    <div class="recipe-container">
        <h3>
            Мои рецепты
        </h3>
        <template v-if="recipes.length > 0">
            <div
                v-for="recipe in recipes"
                :key="recipe.id"
                class="card"
            >
                <div class="card-body">
                    <div class="card-body__header">
                        <h4>
                            {{ recipe.name }}
                        </h4>
                        <VeganIcon/>
                        {{ recipe.isVegan ? 'Да' : 'Нет' }}
                        <TimeIcon/>
                        {{ recipe.cookTime }}
                    </div>
                    Ингредиенты:
                    {{ recipe.ingredients }}
                    <button
                        class="btn btn-light card-body__remove-button"
                        @click="$emit('remove', recipe.id)"
                    >
                        Удалить рецепт
                    </button>
                </div>
            </div>
        </template>
        <div
            v-else
            class="recipe-container__no-recipes"
        >
            Рецептов нет
        </div>
    </div>
</template>

<script>
import VeganIcon from '../icons/VeganIcon.vue';
import TimeIcon from '../icons/TimeIcon.vue';

export default {
    name: 'RecipesContainer',
    components: { VeganIcon, TimeIcon },
    props: {
        recipes: {
            type: Array,
            default: () => [],
        },
    },
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