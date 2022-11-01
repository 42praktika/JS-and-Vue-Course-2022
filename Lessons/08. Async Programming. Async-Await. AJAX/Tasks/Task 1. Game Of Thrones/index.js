const getCharacterData = (characterId, key) => {
    return fetch("https://www.anapioficeandfire.com/api/characters/" + characterId.toString(), {
    }).then(x => x.json())
        .then(x => x["name"] + ", " + `${key}` + ": " + x[key]);

};

export default getCharacterData;