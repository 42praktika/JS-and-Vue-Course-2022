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
    const buttonMem = document.createElement('button');
    buttonMem.classList.add('btn', 'btn-warning');
    buttonMem.textContent = 'Дай МНЕ МЕМ!';

    const containerForMemes = document.createElement('div');
    containerForMemes.classList.add('main__image-container');

    const mainElement = document.querySelector('.main')
    mainElement.append(containerForMemes, buttonMem);

    buttonMem.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            await updateImage(data['data']['memes'][getRandomIndex()])
        } catch (error) {
            throw new Error(error);
        }
    })
    // Конец
};

export default giveMeMeme;