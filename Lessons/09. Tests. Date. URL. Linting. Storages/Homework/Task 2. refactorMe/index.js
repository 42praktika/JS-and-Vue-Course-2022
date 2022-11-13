const dictionaryForResponse = {
    'text=': ' ',
    'coma': ',',
    'space': ' ',
    'dot': '.',
    'semicolon': ';',
    'apostrophe': "'",
    '&': '',
    '=': '',
    "' ": "'"
}

const getTextFromUrl = (url) => {
    // Начало
    const urlText = new URL(url);
    let response = urlText.searchParams.toString();

    for(let word in dictionaryForResponse){
        response = response.replaceAll(word, dictionaryForResponse[word]);
    }

    return response;
    // Конец
};

export default getTextFromUrl;