const specialSymbols = {
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'"
}

const getTextFromUrl = (url) => {
    // Начало
    const parameters = new URL(url).searchParams;
    let result = '';
    parameters.forEach((element, elementIndex) => {
        if (elementIndex === 'text') {
            result += ' ' + element;
        } else {
            result += specialSymbols[elementIndex];
        }
    });
    result = result.replaceAll("' ", "'")
    return result
    // Конец
};

export default getTextFromUrl;