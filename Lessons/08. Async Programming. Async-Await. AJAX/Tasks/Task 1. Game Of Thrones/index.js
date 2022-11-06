const getCharacterData = (characterId, key) => {
    // Начало
    return fetch('https://www.anapioficeandfire.com/api/characters/${characterId}')
    .then((response) => response.json())
    .then((data) => data['name'] + ', ' +  key + ': ' +  data[key]);
    // Конец
};

export default getCharacterData;