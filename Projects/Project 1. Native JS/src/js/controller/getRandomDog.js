const URL = 'https://dog.ceo/api/breeds/image/random';

export const getRandomDog = () => fetch(URL)
    .then((response) => response.json())
    .then((data) => data.message)
    .then((imageUrl) => fetch(imageUrl))
    .then((response) => response.blob())
    .catch((e) => alert(e));
