/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Satellite = require("./Satellite.vue");

describe("10.c.1 Satellite", () => {
    const wrapper = mount(Satellite.default);
    expect(wrapper.element).toMatchSnapshot();

    it("10.c.1.1 Satellite has data", () => {
        expect(typeof Satellite.default.data).toBe("function");
    });

    const input = wrapper.find('.form-control');

    it("10.c.1.3 with radius 42000k", async () => {
        input.element.value = 42000;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.c.1.4 with radius 101010k", async () => {
        input.element.value = 101010;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.c.1.5 with radius 7400k", async () => {
        input.element.value = 7400;
        await input.trigger("input");
        expect(wrapper.element).toMatchSnapshot();
    });
});
