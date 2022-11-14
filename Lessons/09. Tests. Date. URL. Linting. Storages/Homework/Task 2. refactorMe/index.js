const getTextFromUrl = (url) => {
    const symbols = {
        'text=': ' ',
        'coma': ',',
        'dot': '.',
        'space': ' ',
        'semicolon': ';',
        'apostrophe': "'",
        '&': '',
        '=': '',
        "' ": "'",
    }
    let str = new URL(url).searchParams.toString();
    for (let key in symbols) {
        str = str.replaceAll(key, symbols[key])
    }
    return str;
};

export default getTextFromUrl;