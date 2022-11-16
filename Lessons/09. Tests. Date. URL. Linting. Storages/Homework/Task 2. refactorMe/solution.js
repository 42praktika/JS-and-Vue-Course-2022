const SIGNS = {
    space: ' ',
    dot: '.',
    coma: ',',
    semicolon: ';',
    apostrophe: "'",
};

const replaceTextForSymbols = (text) => {
    let resultText = text;
    Object.keys(SIGNS).forEach((sign) => {
        resultText = resultText.replaceAll(sign, SIGNS[sign]);
    });
    return resultText;
};

const getTextFromUrl = (url) => {
    // Начало
    const urlObject = new URL(url);
    const stringParams = urlObject.searchParams.toString();

    return replaceTextForSymbols(stringParams)
        .replaceAll('text=', ' ')
        .replaceAll('&', '')
        .replaceAll('=', '')
        .replaceAll("' ", "'");

    // Конец
};

export default getTextFromUrl;