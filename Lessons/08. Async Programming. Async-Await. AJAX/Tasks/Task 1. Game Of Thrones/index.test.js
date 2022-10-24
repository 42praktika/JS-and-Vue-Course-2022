import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

import getCharacterData from './index';
import { RESPONSES } from './__fixtures__/responses';

describe('08.c.1 getCharacterData', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('08.c.1.1 get culture of character №121', async () => {
        fetch.mockResponseOnce(JSON.stringify(RESPONSES['121']));

        return getCharacterData(121, 'culture').then((info) => {
            const correctAnswer = 'Androw Ashford, culture: Reach';
            expect(info).toEqual(correctAnswer);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    it('08.c.1.2 get actor of Jon Snow', () => {
        fetch.mockResponseOnce(JSON.stringify(RESPONSES['583']));

        return getCharacterData(583, 'playedBy').then((info) => {
            const correctAnswer = 'Jon Snow, playedBy: Kit Harington';
            expect(info).toEqual(correctAnswer);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    it('08.c.1.3 get Aegon Targaryen birth date', () => {
        fetch.mockResponseOnce(JSON.stringify(RESPONSES['42']));

        return getCharacterData(42, 'born').then((info) => {
            const correctAnswer = 'Aegon Targaryen, born: In 281 AC or 282 AC, at Dragonstone';
            expect(info).toEqual(correctAnswer);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    it('08.c.1.4 get Catelyn Stark death time', () => {
        fetch.mockResponseOnce(JSON.stringify(RESPONSES['232']));

        return getCharacterData(232, 'died').then((info) => {
            const correctAnswer = 'Catelyn Stark, died: In 299 AC, at the Twins';
            expect(info).toEqual(correctAnswer);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });
});
