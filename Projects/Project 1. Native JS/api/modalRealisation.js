const URL_DOGS = 'https://dog.ceo/api/breeds/image/random';

export const runModalsApi = () => {
    const button = document.querySelector('.btn-dogs');
    button.addEventListener('click', async () => {
        try {
            const image = document.querySelector('.img-dog');
            const response = await fetch(URL_DOGS);
            const data = await response.json();
            image.src = data.message;
        } catch (error) {
            console.log(error);
        }
    })
}



