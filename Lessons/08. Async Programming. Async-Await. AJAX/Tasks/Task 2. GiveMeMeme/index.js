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
    button.classList.add("btn", "btn-warning");
    button.textContent = "ДАЙ МНЕ МЕМ!";
    const mainImageContainer = document.createElement('div')
    mainImageContainer.className = "main__image-container";
    const main = document.querySelector(".main");
    main.append(mainImageContainer, button);

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            await updateImage(data['data']['memes'][getRandomIndex()])
        } catch (error) {
            console.error(error);
        }
    })
    // Конец
};

export default giveMeMeme;