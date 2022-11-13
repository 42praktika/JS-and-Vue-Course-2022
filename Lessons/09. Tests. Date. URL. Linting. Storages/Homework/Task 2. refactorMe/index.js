const dictionary = {
    'text=': ' ',
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'",
    '&': '',
    '=': '',
    "' ": "'"
}

const getTextFromUrl = (url) => {
    // Начало
    let urlToText = new URL(url).searchParams.toString();
    for(let word in dictionary){
         urlToText = urlToText.replaceAll(word, dictionary[word]);
    }
    return urlToText;
    // Конец
};

export default getTextFromUrl;