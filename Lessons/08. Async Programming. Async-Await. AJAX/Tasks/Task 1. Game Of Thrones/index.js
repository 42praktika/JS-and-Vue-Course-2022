const getCharacterData = (characterId, key) => {

    const URL = 'https://www.anapioficeandfire.com/api/characters/';
    return fetch(URL + characterId)
        .then((response) => response.json())
        .then((data) => data['name'] + ', ' + key + ': ' + data[key]);

};

export default getCharacterData;