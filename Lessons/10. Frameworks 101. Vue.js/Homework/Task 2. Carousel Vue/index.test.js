/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Carousel = require("./Carousel.vue");

describe("10.h.2 Carousel", () => {
    const wrapper = mount(Carousel.default, {
        data() {
            return {
                images: [
                    '/Lessons/09. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
                    '/Lessons/09. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
                    '/Lessons/09. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg',
                ],
            };
        },
    });
    expect(wrapper.element).toMatchSnapshot();

    it("10.h.2.1 Carousel has data", () => {
        expect(typeof Carousel.default.data).toBe("function");
    });

    const buttonPrev = wrapper.find('.carousel-control-prev');
    const buttonNext = wrapper.find('.carousel-control-next');

    it("10.h.2.3 next button click", async () => {
        await buttonNext.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.2.4 next button one more click", async () => {
        await buttonNext.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.2.5 next button one more click", async () => {
        await buttonNext.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.2.6 prev button click", async () => {
        await buttonPrev.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.2.7 prev button one more click", async () => {
        await buttonPrev.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.2.8 next button click", async () => {
        await buttonNext.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });
});
