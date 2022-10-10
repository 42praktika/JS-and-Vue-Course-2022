/**
 * @jest-environment jsdom
 */
import setNewsMaker from './index';

const simulateInputValueChange = (value) => {
    const input = document.querySelector('.form-control');
    input.value = value;
    const event = new Event('input');
    input.dispatchEvent(event);
};

describe('06.h.1 setNewsMaker', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div class="main news">\n' +
            '    <div class="news__header">\n' +
            '        <h2>Редактор новостей</h2>\n' +
            '    </div>\n' +
            '    <div class="news__form">\n' +
            '        <input\n' +
            '            class="form-control"\n' +
            '            placeholder="Наберите текст новости"\n' +
            '        />\n' +
            '        <button class="btn btn-primary">\n' +
            '            Создать\n' +
            '        </button>\n' +
            '    </div>\n' +
            '    <h3 class="news__container-header">\n' +
            '        Текущие новости\n' +
            '    </h3>\n' +
            '    <div class="news__container"></div>\n' +
            '</div>';

        setNewsMaker();
    });

    it('06.h.1.1 the input was cleared after the news was added', () => {
        jest.useFakeTimers();

        const input = document.querySelector('.form-control');
        const button = document.querySelector('.btn');

        simulateInputValueChange('Текст первой новости');

        button.click();
        jest.advanceTimersByTime(200);

        const inputContent = input.value;
        expect(inputContent).toBe('');
    });

    it('06.h.1.2 add first news item', () => {
        jest.useFakeTimers();

        const button = document.querySelector('.btn');
        const newsContainer = document.querySelector('.news__container');

        const newsText = 'Текст первой новости';
        simulateInputValueChange(newsText);

        button.click();
        jest.advanceTimersByTime(200);

        const currentNews = newsContainer.querySelectorAll('.news__news-element');
        const newsCount = [ ...currentNews ].length;
        expect(newsCount).toBe(1);

        // Работаем с первой добавленной новостью
        const firstNewsItem = newsContainer.querySelector('.news__news-element');

        const itemHeader = firstNewsItem.querySelector('h5');
        expect(itemHeader).not.toBeNull();

        const itemBody = firstNewsItem.querySelector('div');
        expect(itemBody).not.toBeNull();

        const itemText = itemBody.textContent;
        expect(itemText).toBe(newsText);
    });

    it('06.h.1.3 add second news item', () => {
        jest.useFakeTimers();

        const button = document.querySelector('.btn');
        const newsContainer = document.querySelector('.news__container');

        simulateInputValueChange('Текст первой новости');

        button.click();
        jest.advanceTimersByTime(200);

        const secondNewsText = 'Текст второй новости';
        simulateInputValueChange(secondNewsText);

        button.click();
        jest.advanceTimersByTime(200);

        const currentNews = newsContainer.querySelectorAll('.news__news-element');
        const newsCount = [ ...currentNews ].length;
        expect(newsCount).toBe(2);

        // Работаем со второй новостью (добавленной вперед)
        const secondNewsItem = newsContainer.querySelector('.news__news-element');

        const itemHeader = secondNewsItem.querySelector('h5');
        expect(itemHeader).not.toBeNull();

        const itemBody = secondNewsItem.querySelector('div');
        expect(itemBody).not.toBeNull();

        const itemText = itemBody.textContent;
        expect(itemText).toBe(secondNewsText);
    });
});