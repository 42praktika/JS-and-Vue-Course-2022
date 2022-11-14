import * as constants from "constants";

const getTextFromUrl = (url) => {
    // Начало
    const newURL = new URL(url);
    const searchURL = newURL.searchParams.toString();
    const arrayURL = searchURL.split('&');
    let returnedStringUrl = ' ';

    for (let i = 0; i < arrayURL.length; i++) {
        if (arrayURL[i].includes('text=')) {
            arrayURL[i] = arrayURL[i].replace('text=', '');
        }
        if (arrayURL[i].includes('coma=')) {
            arrayURL[i] = arrayURL[i].replace('coma=', ',');
        }
        if (arrayURL[i].includes('dot=')) {
            arrayURL[i] = arrayURL[i].replace('dot=', '.');
        }
        if (arrayURL[i].includes('apostrophe=')) {
            arrayURL[i] = arrayURL[i].replace('apostrophe=', '\'');
        }
    }

    for (let i = 0; i < arrayURL.length; i++) {
        if (arrayURL[i + 1] === '\'' || arrayURL[i + 1] === ',' || arrayURL[i + 1] === '.' || (i + 1) === arrayURL.length) {
            returnedStringUrl = returnedStringUrl + arrayURL[i];
        } else if (arrayURL[i] === '\'') {
            returnedStringUrl = returnedStringUrl + arrayURL[i];
        } else returnedStringUrl = returnedStringUrl + arrayURL[i] + ' ';
    }

    return returnedStringUrl;
    // Конец
};

export default getTextFromUrl;