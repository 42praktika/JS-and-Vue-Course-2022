const getCharacterData = (characterId, key) => {
    return fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`)
        .then((response) => response.json())
        .then((data) => `${data.name}, ${key}: ${data[key]}`);
};

export default getCharacterData;