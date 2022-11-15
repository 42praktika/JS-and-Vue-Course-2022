const specialSymbols = {
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
    let urlText = new URL(url).searchParams.toString();
    for(let symbol in specialSymbols) {
        urlText = urlText.replaceAll(symbol, specialSymbols[symbol]);
    }
    return urlText;
};

export default getTextFromUrl;