export const setRandomDog = (data) => {
    const image = document.querySelector('.random-dog__image');
    image.src = data.url;
};
