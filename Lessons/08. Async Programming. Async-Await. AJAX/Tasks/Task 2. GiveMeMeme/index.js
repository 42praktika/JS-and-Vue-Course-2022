const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const { url, width, height } = imageData;

    const imageContainer = document.querySelector('.main__image-container');
    const imgElement = document.createElement('img');
    imgElement.setAttribute('width', width);
    imgElement.setAttribute('height', height);
    imgElement.setAttribute('src', url);

    imageContainer.innerHTML = '';
    imageContainer.append(imgElement);
};

const getRandomIndex = () => Math.floor(100 * Math.random());

const giveMeMeme = () => {
    // Начало
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'ДАЙ МНЕ МЕМ!'

    const memContainer = document.createElement('div');
    memContainer.className = 'main__image-container';

    document.querySelector('.main').append(memContainer, button);

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const json = await response.json();
            const mem = json['data']['memes'][getRandomIndex().toString()];
            updateImage(mem);
        } catch (error) {
            throw error;
        }
    })
    // Конец
};

export default giveMeMeme;
