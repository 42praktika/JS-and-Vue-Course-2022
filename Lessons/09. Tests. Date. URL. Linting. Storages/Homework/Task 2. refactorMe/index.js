const getTextFromUrl = (url) => {
    // Начало
    const getTextFromUrl = (url) => {
        const newUrl= new URL(url).searchParams.toString()
        return changingString (newUrl)
    };

    const changingString = (string) => {
        return string.replaceAll('text=', ' ').replaceAll('coma', ',')
            .replaceAll('dot', '.').replaceAll('space', ' ')
            .replaceAll('semicolon', ';').replaceAll('apostrophe', "'")
            .replaceAll('&', '').replaceAll('=', '').replaceAll("' ", "'");
    }

    // Конец
};

export default getTextFromUrl;