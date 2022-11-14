/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const TimeKiller = require("./TimeKiller.vue");

describe("11.c.1 TimeKiller", () => {
    const wrapper = mount(TimeKiller.default);

    it("11.c.1.1 TimeKiller has data", () => {
        expect(typeof TimeKiller.default.data).toBe("function");
    });

    it("11.c.1.2 TimeKiller is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    const addButton = wrapper.find('.btn-warning');

    it("11.c.1.4 add time", async () => {
        await addButton.trigger("click");
        const timeElementsContainer = wrapper.find('.times-container');
        const timeElementsLength = wrapper.findAll('.times-container__item').length;
        expect(timeElementsLength).toBe(1);
    });

    it("11.c.1.5 add more times!", async () => {
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        const timeElementsContainer = wrapper.find('.times-container');
        const timeElementsLength = wrapper.findAll('.times-container__item').length;
        expect(timeElementsLength).toBe(5);
    });

    it("11.c.1.6 mouseover times", async () => {
        const timeElements = wrapper.findAll('.times-container__item');

        const firstTime = timeElements.at(0);
        const thirdTime = timeElements.at(2);

        await firstTime.trigger("mouseover");
        await thirdTime.trigger("mouseover");

        const timeElementsContainer = wrapper.find('.times-container');
        const timeElementsLength = wrapper.findAll('.times-container__item').length;
        expect(timeElementsLength).toBe(3);
    });

    it("11.c.1.7 add more times! 2", async () => {
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");
        await addButton.trigger("click");

        const timeElementsContainer = wrapper.find('.times-container');
        const timeElementsLength = wrapper.findAll('.times-container__item').length;
        expect(timeElementsLength).toBe(12);
    });

    it("11.c.1.8 mouseover times 2", async () => {
        const timeElements = wrapper.findAll('.times-container__item');

        const firstTime = timeElements.at(0);
        const fourthTime = timeElements.at(3);
        const tenthTime = timeElements.at(9);

        await firstTime.trigger("mouseover");
        await fourthTime.trigger("mouseover");
        await tenthTime.trigger("mouseover");

        const timeElementsContainer = wrapper.find('.times-container');
        const timeElementsLength = wrapper.findAll('.times-container__item').length;
        expect(timeElementsLength).toBe(9);
    });
});
