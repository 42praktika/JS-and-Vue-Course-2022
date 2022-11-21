export const randomCatsModalApi = () => {
    const modalContent = document.querySelectorAll('.modal__content');
    const imgOfCat = document.createElement('img');
    const button = document.createElement('button');
    button.classList.add('btn-cats');
    button.textContent = 'Получить кота!';
    imgOfCat.classList.add('img-cat');
    modalContent[0].append(imgOfCat,button);
}
export const fetchHandler = async () => {
    try {
        const image = document.querySelector('.img-cat');
        const url = "https://aws.random.cat/meow";
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}
export const clickOfCat = () => {
    const button = document.querySelector('.btn-cats');
    button.addEventListener('click', () => {
        fetchHandler();
    })
}



