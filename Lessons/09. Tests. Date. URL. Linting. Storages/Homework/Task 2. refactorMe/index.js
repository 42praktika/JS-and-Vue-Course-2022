const getTextFromUrl = (url) => {
    // Начало

    let urlToString = new URL(url).searchParams.toString();
    return transformString(urlToString);

    // Конец
};

const transformString = (string) => {
    return string.replaceAll('text=', ' ').replaceAll('coma',',').replaceAll('dot','.')
        .replaceAll('space', ' ').replaceAll('semicolon', ';').replaceAll('apostrophe', "'")
        .replaceAll('&', '').replaceAll('=', '').replaceAll("' ", "'");
}

export default getTextFromUrl;