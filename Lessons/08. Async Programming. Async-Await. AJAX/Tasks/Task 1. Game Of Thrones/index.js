const getCharacterData = (characterId, key) => {
    // Начало
    const URL = 'https://www.anapioficeandfire.com/api/characters/'
    let promice = fetch(URL + characterId)
        .then((responce) => responce.json())
        .then((responce) => `${responce.name}, ${key}: ${responce[key]}`)
    return promice
    // Конец
};

export default getCharacterData;