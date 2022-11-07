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
    const memeButton = document.createElement('button');
    const memeContainer = document.createElement('div');
    const main = document.querySelector('.main');

    memeButton.className = 'btn btn-warning';
    memeButton.textContent = 'ДАЙ МНЕ МЕМ!';

    memeContainer.className = 'main__image-container';

    main.append(memeContainer, memeButton);

    const getImage = async () => {
        try {
            const response = await fetch(BASE_URL);
            const result = await response.json();
            await updateImage(result['data']['memes'][getRandomIndex()]);
        } catch (error) {
            throw new Error('Что значит: опрокинуть ошибку дальше?');
        }
    }

    memeButton.addEventListener('click', getImage);
    // Конец
};

export default giveMeMeme;