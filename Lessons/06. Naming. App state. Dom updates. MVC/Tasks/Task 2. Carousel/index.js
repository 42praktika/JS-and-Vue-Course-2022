const setCarousel = (imageUrls) => {
    // Начало
    const state = {
        arrayOfImageUrls: imageUrls,
        colOfImages: 0,
    }
    const carouselInner = document.querySelector('.carousel-inner');
    const setAllElementInPage = () => {
        state.arrayOfImageUrls.forEach((img) => {
            const divElement = document.createElement('div');
            divElement.classList.add('carousel-item');
            const imgElement = document.createElement('img');
            imgElement.classList.add('d-block', 'w-100');
            imgElement.setAttribute('src', img);
            carouselInner.append(divElement);
            divElement.append(imgElement);
        });
    }
    setAllElementInPage();
    document.querySelector('.carousel-item').classList.add('active');

    const buttonOfImagePrev = document.querySelector('.carousel-control-prev');
    buttonOfImagePrev.addEventListener('click', () => {
        if (state.colOfImages === 0) {
            state.colOfImages = state.arrayOfImageUrls.length - 1;
        } else {
            state.colOfImages--;
        }
        render(state);
    });

    const buttonOfImageNext = document.querySelector('.carousel-control-next');
    buttonOfImageNext.addEventListener('click', () => {
        if (state.colOfImages === state.arrayOfImageUrls.length - 1) {
            state.colOfImages = 0;
        } else {
            state.colOfImages++;
        }
        render(state);
    });

    // Конец
};

const render = (state) => {
    const itemsOfCarousel = document.querySelectorAll('.carousel-item');
    let activeElements = document.querySelector('.active');
    activeElements.classList.remove('active');
    itemsOfCarousel[state.colOfImages].classList.add('active');
}




export default setCarousel;