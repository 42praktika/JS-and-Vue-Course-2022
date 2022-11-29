/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const ItisIcon = require("./ItisIcon.vue");

describe("12.c2 ItisIcon", () => {
    const wrapper = mount(ItisIcon.default);
    expect(wrapper.element).toMatchSnapshot();

    it("12.c2.2 ItisIcon is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("12.c2.3 change prop 'icon-type' to 'excited'", async () => {
        await wrapper.setProps({ iconType: 'excited' });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.c2.4 change prop 'icon-type' to 'loved'", async () => {
        await wrapper.setProps({ iconType: 'loved' });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.c2.5 change prop 'icon-type' to 'happy'", async () => {
        await wrapper.setProps({ iconType: 'happy' });
        expect(wrapper.element).toMatchSnapshot();
    });
});
