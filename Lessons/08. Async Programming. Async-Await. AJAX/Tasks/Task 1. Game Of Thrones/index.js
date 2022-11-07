const getCharacterData = (characterId, key) => {
    const url = "https://www.anapioficeandfire.com/api/characters/"
    return fetch(url + characterId)
        .then((response) => response.json())
        .then((data) => data["name"] + ", " + key + ": " + data[key])
};

export default getCharacterData;