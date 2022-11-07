const getCharacterData = (characterId, key) => {
    // Начало
    const state = {
        url: `https://www.anapioficeandfire.com/api/characters/${characterId}`,
        key: key
    }

    const result = fetch(state.url)
        .then((response) => response.json())
        .then((data) => getResult(data));

    const getResult = (data) => {
        return data['name'] + ', ' + state.key + ': ' + data[state.key];
    }

    return result;
    // Конец
};

export default getCharacterData;