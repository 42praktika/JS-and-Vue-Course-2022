const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const {url, width, height} = imageData;

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
    const button = document.createElement('button')
    button.classList.add("btn", "btn-warning")
    button.textContent = "ДАЙ МНЕ МЕМ!"

    const divContainer = document.createElement('div')
    divContainer.className = "main__image-container"

    const mainClass = document.querySelector(".main")
    mainClass.append(divContainer, button)

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL)
            const responseData = await response.json()
            updateImage(responseData.data.memes[getRandomIndex()])
        } catch (error) {
            throw error
        }
    })

};

export default giveMeMeme;
