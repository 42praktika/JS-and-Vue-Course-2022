/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Recipes = require("./Recipes.vue");

describe("11.h.1 Recipes", () => {
    const wrapper = mount(Recipes.default);
    expect(wrapper.element).toMatchSnapshot();

    it("11.h.1.1 Recipes has data", () => {
        expect(typeof Recipes.default.data).toBe("function");
    });

    it("11.h.1.2 Cards is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("11.h.1.3 add first recipe", async () => {
        const nameInput = wrapper.find('.recipe-form__name');
        nameInput.element.value = 'Борщ классический';
        await nameInput.trigger("input");

        const ingredientsTextarea = wrapper.find('.recipe-form__ingredients');
        ingredientsTextarea.element.value = 'Говядина, картофель, капуста, лук';
        await ingredientsTextarea.trigger("input");

        const recipeTextTextarea = wrapper.find('.recipe-form__recipe-text');
        recipeTextTextarea.element.value = 'Берешь и делаешь борщ';
        await recipeTextTextarea.trigger("input");

        const cookTimeOptions = wrapper.find('.recipe-form__cook-time').findAll('option');
        await cookTimeOptions.at(9).setSelected();

        const addButton = wrapper.find('.recipe-form__add-button');
        await addButton.trigger("click");

        wrapper.vm.$nextTick(() => {
            expect(wrapper.element).toMatchSnapshot();
        });
    });

    it("11.h.1.4 add second recipe", async () => {
        const nameInput = wrapper.find('.recipe-form__name');
        nameInput.element.value = 'Синнабон с корицей';
        await nameInput.trigger("input");

        const ingredientsTextarea = wrapper.find('.recipe-form__ingredients');
        ingredientsTextarea.element.value = 'Пшеничная мука, дрожжи сухие, яйца куриные, молоко, масло, сахар, соль';
        await ingredientsTextarea.trigger("input");

        const recipeTextTextarea = wrapper.find('.recipe-form__recipe-text');
        recipeTextTextarea.element.value = 'Рас рас и готово рас рас и готово';
        await recipeTextTextarea.trigger("input");

        const cookTimeOptions = wrapper.find('.recipe-form__cook-time').findAll('option');
        await cookTimeOptions.at(5).setSelected();

        const isVeganCheckbox = wrapper.find('.form-check-input');
        isVeganCheckbox.element.checked = 'checked';
        await isVeganCheckbox.trigger("change");

        const addButton = wrapper.find('.recipe-form__add-button');
        await addButton.trigger("click");

        wrapper.vm.$nextTick(() => {
            expect(wrapper.element).toMatchSnapshot();
        });
    });

    it("11.h.1.5 remove first recipe", async () => {
        const removeFirstRecipeButton = wrapper.findAll('.card-body__remove-button').at(0);
        await removeFirstRecipeButton.trigger("click");

        wrapper.vm.$nextTick(() => {
            expect(wrapper.element).toMatchSnapshot();
        });
    });

    it("11.h.1.6 remove second recipe", async () => {
        const removeFirstRecipeButton = wrapper.findAll('.card-body__remove-button').at(0);
        await removeFirstRecipeButton.trigger("click");

        wrapper.vm.$nextTick(() => {
            expect(wrapper.element).toMatchSnapshot();
        });
    });
});
