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
    
    // Конец
};

export default giveMeMeme;