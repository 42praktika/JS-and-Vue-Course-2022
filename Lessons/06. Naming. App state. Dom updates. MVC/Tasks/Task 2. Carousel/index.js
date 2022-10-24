const render = (state) => {
    const itemsOfCarousel = document.querySelectorAll('.carousel-item');
    let activeElements = document.querySelector('.active');
    activeElements.classList.remove('active');
    itemsOfCarousel[state.currentImage].classList.add('active');
}

const setCarousel = (imageUrls) => {

    const state = {
        images: imageUrls,
        currentImage: 0
    }

    const classCarouselInner = document.querySelector('.carousel-inner');

    for (let i = 0; i < imageUrls.length; i++) {
        const Div = document.createElement('div');
        Div.classList.add('carousel-item');
        const imageElement = document.createElement('img');
        imageElement.classList.add('d-block', 'w-100');
        imageElement.setAttribute('src', imageUrls[i]);
        classCarouselInner.append(Div);
        Div.append(imageElement);
    }

    document.querySelector('.carousel-item').classList.add('active');

    const buttonBehind = document.querySelector('.carousel-control-prev');

    buttonBehind.addEventListener('click', () => {
        if (state.currentImage === 0) {
            state.currentImage = state.images.length - 1;
        } else {
            state.currentImage--;
        }
        render(state);
    });

    const buttonNext = document.querySelector('.carousel-control-next');

    buttonNext.addEventListener('click', () => {
        if (state.currentImage === state.images.length - 1) {
            state.currentImage = 0;
        } else {
            state.currentImage++;
        }
        render(state);
    });
    render(state)
}

export default setCarousel;