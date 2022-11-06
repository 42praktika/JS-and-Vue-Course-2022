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
    const main = document.querySelector('.main');
    const memeButton = document.createElement('button');
    memeButton.classList.add('btn', 'btn-warning');
    memeButton.textContent = 'ДАЙ МНЕ МЕМ!';
    const memeContainer = document.createElement('div');
    memeContainer.className = 'main__image-container';

    main.append(memeContainer, memeButton);

    memeButton.addEventListener('click', async () => {
        try {
           const response = await fetch(BASE_URL);
           const responseDataJson = await response.json();
           updateImage(responseDataJson.data.memes[getRandomIndex()]);
        }
        catch (error) {
            throw error;
        }
    })
    // Конец
};

export default giveMeMeme;