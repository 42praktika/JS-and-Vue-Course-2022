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
    const main = document.querySelector('.main');
    const button = document.createElement("button");
    button.className = 'btn btn-warning';
    button.textContent = "ДАЙ МНЕ МЕМ!";
    const imageContainer = document.createElement('div');
    imageContainer.className = 'main__image-container';
    main.append(imageContainer);
    main.append(button);
    button.addEventListener("click", async event => {
        try {
            const request = await fetch(BASE_URL);
            const data = await request.json();
            updateImage(data["data"]["memes"][getRandomIndex()]);
        } catch (error) {
            console.error(error);
        }


    })
};

export default giveMeMeme;