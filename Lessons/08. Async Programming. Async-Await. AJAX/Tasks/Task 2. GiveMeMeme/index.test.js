/**
 * @jest-environment jsdom
 */

import fetchMock from "jest-fetch-mock";
import { waitFor } from "@testing-library/dom";

fetchMock.enableMocks();

import { MEMES } from './__fixtures__/responses';
import giveMeMeme from './index';

describe('08.c.2 giveMeMeme', () => {
    beforeEach(() => {
        fetch.resetMocks();
        jest.spyOn(global.Math, 'random').mockReturnValue(0.01);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    it('08.c.2.1 get meme with id 87743020', async () => {
        jest.useFakeTimers();

        fetch.mockResponseOnce(JSON.stringify({
            success: true,
            data: {
                memes: MEMES,
            },
        }));

        document.body.innerHTML = '<div class="main"></div>';

        giveMeMeme();

        const button = document.querySelector('button');
        button.click();

        await waitFor(() =>  expect(document.querySelector('img') !== null).toBe(true));

        const imgElement = document.querySelector('img');
        const imgUrl = imgElement.getAttribute('src');

        expect(imgUrl).toEqual('https://i.imgflip.com/1g8my4.jpg');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
