const getCharacterData = (characterId, key) => {
    // Начало
    const url = 'https://www.anapioficeandfire.com/api/characters/' + caracterId;
    return fetch(url)
        .then((data) => data.json())
        .then((data) => `${data.name}, ${key}: ${data[key]}`);
    // Конец
};

export default getCharacterData;