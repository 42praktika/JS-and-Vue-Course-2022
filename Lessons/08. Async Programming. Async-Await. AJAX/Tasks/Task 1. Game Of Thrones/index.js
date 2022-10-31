const getCharacterData = (characterId, key) => {
    // Начало
    const URL = 'https://www.anapioficeandfire.com/api/characters/';
    const objectPromise = fetch(URL + characterId)
        .then((response) => response.json());

    return objectPromise.then(data => data['name'] + ', ' + key + ': ' + data[key]);
    // Конец
};

export default getCharacterData;
