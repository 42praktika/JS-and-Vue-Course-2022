const KEY_WORDS = {
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
    const response = new URL(url);
    let responseText = response.searchParams.toString();
    for (let keyword in KEY_WORDS) {
        responseText = responseText.replaceAll(keyword, KEY_WORDS[keyword]);
    }
    return responseText;
};

export default getTextFromUrl;