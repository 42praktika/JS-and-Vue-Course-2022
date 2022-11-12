const findParamsInUrl = (urlStr) => {
    return new URL(urlStr).searchParams;
}

const replaceKeyWords = (str) => {
    return str
        .replaceAll('text=', ' ')
        .replaceAll('coma', ',')
        .replaceAll('dot', '.')
        .replaceAll('space', ' ')
        .replaceAll('semicolon', ';')
        .replaceAll('apostrophe', "'")
        .replaceAll('&', '')
        .replaceAll('=', '')
        .replaceAll("' ", "'");
}

const getTextFromUrl = (url) => {
    const params = findParamsInUrl(url);
    return replaceKeyWords(params.toString());
};

export default getTextFromUrl;
