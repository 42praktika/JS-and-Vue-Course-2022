import axios from "axios";

const setCatGallery = () => {
    const URL = "https://api.thecatapi.com/v1/images/search"
    const COUNT_OF_PICTURES = 10
    const mainContainer = document.querySelector('.main__container');
    const addCats = async () => {
        for (let i = 0; i < COUNT_OF_PICTURES; i++) {
            const img = document.createElement('img');
            const url = await axios.get(URL);
            img.setAttribute('src', url.data[0].url);
            mainContainer.append(img);
        }
    }
    return addCats().then(() => "cat gallery is ready!");
};

export default setCatGallery;
