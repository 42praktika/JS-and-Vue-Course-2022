const getParamsFromUrl = (url) =>{
    let paramsFromUrl = new URL(url).searchParams;
    return paramsFromUrl;
}

const replaceSymbols = (str) => {
    let newStr = str.replaceAll('text=', ' ').replaceAll('coma', ',')
        .replaceAll('dot', '.').replaceAll('space', ' ')
        .replaceAll('semicolon', ';').replaceAll('apostrophe', "'")
        .replaceAll('&', '').replaceAll('=', '')
        .replaceAll("' ", "'");
    return newStr;
}
const getTextFromUrl = (url) => {
    // Начало
    const params = getParamsFromUrl(url);
    const str = replaceSymbols(params.toString());
    return str
    // Конец
};

export default getTextFromUrl;