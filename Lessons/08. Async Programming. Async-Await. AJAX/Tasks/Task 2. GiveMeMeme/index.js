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
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    const imageContainer = document.createElement('div');
    imageContainer.className = 'main__image-container';
    const main = document.querySelector('.main');
    main.append(imageContainer);
    main.append(button);

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const result = await response.json();
            if (!result.success) {
                throw 'Connection lost';
            }
            const meme = await result['data']['memes'][getRandomIndex()];
            await updateImage(meme);
        } catch (error) {
            throw new Error(error);
        }
    });
    // Конец
};

export default giveMeMeme;