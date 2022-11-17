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
    const mainElement = document.querySelector('.main');
    const button = document.createElement('button');
    const imageContainer = document.createElement('div');

    button.classList.add('btn', 'btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();

            if (data.success) {
                const meme = data.data.memes[getRandomIndex()];
                updateImage(meme);
            }
        } catch (error) {
            throw error;
        }
    });

    mainElement.append(button);
    imageContainer.classList.add('main__image-container');
    mainElement.prepend(imageContainer);
    // Конец
};

export default giveMeMeme;