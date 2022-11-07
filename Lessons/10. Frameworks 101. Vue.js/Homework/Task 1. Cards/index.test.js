/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Cards = require("./Cards.vue");

describe("10.h.1 Cards", () => {
    const wrapper = mount(Cards.default, {
        data() {
            return {
                cards: [
                    {
                        id: 0,
                        src: '/Lessons/9. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/iphone10.jpg',
                        description: 'Packed with Innovative Features Including a Super Retina Display, TrueDepth Camera System, Face ID and A11 Bionic Chip with Neural Engine',
                        head: 'Iphone X 64GB',
                        price: '800$',
                        number: 0,
                        max: 4,
                    },
                    {
                        id: 1,
                        src: '/Lessons/9. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/galaxys21.jpg',
                        description: 'Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go.',
                        head: 'Samsung Galaxy S21 128GB',
                        price: '1000$',
                        number: 0,
                        max: 10,
                    },
                    {
                        id: 2,
                        src: '/Lessons/9. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/nokia2600.jpg',
                        description: 'Give me back my 2007',
                        head: 'Nokia 2600',
                        price: 'Priceless',
                        number: 0,
                        max: 1,
                    },
                ],
            };
        },
    });
    expect(wrapper.element).toMatchSnapshot();

    it("10.h.1.1 Cards has data", () => {
        expect(typeof Cards.default.data).toBe("function");
    });

    const plusButtons = wrapper.findAll('.button-plus');
    const minusButtons = wrapper.findAll('.button-minus');

    it("10.h.1.3 first card plus button click", async () => {
        const plusButtons = wrapper.findAll('.button-plus');
        const minusButtons = wrapper.findAll('.button-minus');
        const firstCardPlusButton = plusButtons.at(0);

        await firstCardPlusButton.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.1.4 second card minus button click", async () => {
        const secondCardMinusButton = minusButtons.at(1);

        await secondCardMinusButton.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.1.5 third card plus button two clicks", async () => {
        const thirdCardPlusButton = plusButtons.at(2);

        await thirdCardPlusButton.trigger("click");
        await thirdCardPlusButton.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.1.6 third card minus button click", async () => {
        const thirdCardMinusButton = minusButtons.at(2);

        await thirdCardMinusButton.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("10.h.1.7 third card minus button two more clicks", async () => {
        const thirdCardMinusButton = minusButtons.at(2);

        await thirdCardMinusButton.trigger("click");
        await thirdCardMinusButton.trigger("click");
        expect(wrapper.element).toMatchSnapshot();
    });
});
