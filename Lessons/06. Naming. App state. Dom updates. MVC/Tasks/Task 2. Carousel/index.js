const setCarousel = (imageUrls) => {
    // Начало

    const carouselContainer = document.querySelector('.carousel-inner');

    const initializationDOM = () => {

        for (let i = 0; i < imageUrls.length; i++) {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            const image = document.createElement('img');
            image.className = 'd-block w-100';
            image.setAttribute('src', imageUrls[i]);

            carouselItem.append(image);
            carouselContainer.append(carouselItem);
        }
    }

    const render = (state) => {
        state.previous.className = 'carousel-item';
        state.active.className = 'carousel-item active';
    };

    const watchState = () => {
        buttonPrev.addEventListener('click', () => {
            state.previous = state.active;
            if (state.active === firstImg) {
                state.active = lastImg;
            } else {
                state.active = state.active.previousSibling;
            }
            render(state);
        });

        buttonNext.addEventListener('click', () => {
            state.previous = state.active;
            if (state.active === lastImg) {
                state.active = firstImg;
            } else {
                state.active = state.active.nextSibling;
            }
            render(state);
        });
    }

    initializationDOM();
    const buttonPrev = document.querySelector('.carousel-control-prev');
    const buttonNext = document.querySelector('.carousel-control-next');
    const firstImg = carouselContainer.firstChild;
    const lastImg = carouselContainer.lastChild;
    const state = {
        active: firstImg,
        previous: lastImg,
    }
    watchState();
    render(state);
    // Конец
};

export default setCarousel;
