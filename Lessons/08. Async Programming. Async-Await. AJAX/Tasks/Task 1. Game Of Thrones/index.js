const getCharacterData = (characterId, key) => {
    // Начало
    const url = "https://www.anapioficeandfire.com/api/characters/";

    return fetch(url + characterId)
            .then((response) => response.json())
            .then((data) => data['name'] + ', ' +  key + ': ' +  data[key]);
    // Конец
};

export default getCharacterData;