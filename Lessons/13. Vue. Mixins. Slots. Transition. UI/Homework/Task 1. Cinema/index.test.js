/**
 * @jest-environment jsdom
 */

const { mount } = require("@vue/test-utils");
const Cinema = require("./Cinema.vue");
const CardBlock = require("./components/CardBlock.vue");
const DirectorCard = require("./components/DirectorCard.vue");

describe("13.h.1 Cinema", () => {
    const wrapper = mount(Cinema.default, {
        data() {
            return {
                directors: [
                    {
                        id: 0,
                        name: 'Кристофер Нолан',
                        image: './assets/directors/nolan.jpg',
                        age: 51,
                        birthPlace: 'Лондон, Великобритания',
                        movies: 'Интерстеллар, Начало, Помни, Престиж',
                    },
                    {
                        id: 1,
                        name: 'Гильермо дель Торо',
                        image: './assets/directors/deltoro.jpg',
                        age: 57,
                        birthPlace: 'Гвадалахара, Мексика',
                        movies: 'Мутанты, Форма воды, Тихоокеанский рубеж',
                    },
                    {
                        id: 2,
                        name: 'Квентин Тарантино',
                        image: './assets/directors/tarantino.jpg',
                        age: 58,
                        birthPlace: 'Теннесси, США',
                        movies: 'Криминальное чтиво, Однажды в Голливуде',
                    },
                    {
                        id: 3,
                        name: 'Мартин Скорсезе',
                        image: './assets/directors/skorseze.jpg',
                        age: 79,
                        birthPlace: 'Нью-Йорк, США',
                        movies: 'Волк с Уолл-стрит, Славные парни, Ирландец',
                    },
                    {
                        id: 4,
                        name: 'Хаяо Миядзаки',
                        image: './assets/directors/hayao-miyazakis.jpg',
                        age: 80,
                        birthPlace: 'Токио, Япония',
                        movies: 'Унесенные призраками, Ходячий замок',
                    },
                ],
                movies: [
                    {
                        id: 0,
                        name: 'Интерстеллар',
                        image: './assets/movies/interstellar.jpg',
                        director: 'Кристофер Нолан',
                        year: 2014,
                        genre: 'фантастика, драма, приключения',
                    },
                    {
                        id: 1,
                        name: 'Песнь моря',
                        image: './assets/movies/songofthesea.jpg',
                        director: 'Томм Мур',
                        year: 2014,
                        genre: 'фантастика, мультипликация',
                    },
                    {
                        id: 2,
                        name: 'Трудности перевода',
                        image: './assets/movies/lost-in-translation.jpg',
                        director: 'София Коппола',
                        year: 2003,
                        genre: 'драма, мелодрама',
                    },
                    {
                        id: 3,
                        name: 'Шоу Трумана',
                        image: './assets/movies/truman-show.jpg',
                        director: 'Питер Уир',
                        year: 1998,
                        genre: 'драма, комедия',
                    },
                    {
                        id: 4,
                        name: 'Мой сосед Тоторо',
                        image: './assets/movies/totoro.jpg',
                        director: 'Хаяо Миядзаки',
                        year: 1988,
                        genre: 'аниме, мультфильм, фэнтези, приключения, семейный',
                    },
                ],
            };
        },
    });

    it("13.h.1.1 Cinema is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("13.h.1.2 Cinema.vue works correct", () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it("13.h.1.3 CardBlock.vue works correct", () => {
        const cardBlockWrapper = mount(CardBlock.default);
        expect(cardBlockWrapper.element).toMatchSnapshot();
    });

    it("13.h.1.4 DirectorCard.vue works correct", () => {
        const directorCardWrapper = mount(DirectorCard.default);
        expect(directorCardWrapper.element).toMatchSnapshot();
    });
});
