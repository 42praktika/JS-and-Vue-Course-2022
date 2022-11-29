/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const MyDirective = require("./MyDirective.vue");

describe("12.h.1 MyDirective", () => {
    const wrapper = mount(MyDirective.default);
    expect(wrapper.element).toMatchSnapshot();

    it("12.h.1.1 MyDirective has data", () => {
        expect(typeof MyDirective.default.data).toBe("function");
    });

    it("12.h.1.2 MyDirective is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("12.h.1.3 text 'оч'", async () => {
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'оч';
        await searchInput.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.h.1.4 text 'нет результатов'", async () => {
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'нет результатов';
        await searchInput.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.h.1.5 text 'а'", async () => {
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'а';
        await searchInput.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });
});
