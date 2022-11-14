const getTextFromUrl = (url) => {
    const urlString = new URL(url).searchParams.toString()
    return stringConversion(urlString)
};

const stringConversion = (string) => {
    return string.replaceAll('text=', ' ').replaceAll('coma', ',')
        .replaceAll('dot', '.').replaceAll('space', ' ')
        .replaceAll('semicolon', ';').replaceAll('apostrophe', "'")
        .replaceAll('&', '').replaceAll('=', '').replaceAll("' ", "'");
}

export default getTextFromUrl;