const getCharacterData = (characterId, key) => {
    // Начало
     let url = `https://www.anapioficeandfire.com/api/characters/`+ characterId
     return fetch(url).then((response) =>
     response.json()).then((response) =>`${response.name}, ${key}: ${response[key]}`);
    // Конец
};

export default getCharacterData;