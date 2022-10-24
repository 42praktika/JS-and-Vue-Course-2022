const setCarousel = (imageUrls) => {
    // Начало
    const carouselContainer = document.querySelector('.carousel-inner');

    imageUrls.forEach(function(img) {
        const divOfImg = document.createElement('div');
        divOfImg.className = 'carousel-item';
        const image = document.createElement('img');
        image.className = 'd-block w-100';
        image.setAttribute('src', img);

        divOfImg.append(image);
        carouselContainer.append(divOfImg);
    })

    const render = (state) => {
        state.previous.className = 'carousel-item';
        state.active.className = 'carousel-item active';
    };

    const ImgsReplacement = (state) => { 
        render(state);

        buttonPrev.addEventListener('click', () => {
            state.previous = state.active;
            if (state.active === firstImg) {
                state.active = lastImg;
            }
            else {
                state.active = state.active.previousSibling;
            }
            render(state);
        });

        buttonNext.addEventListener('click', () => {
            state.previous = state.active;
            if (state.active === lastImg) {
                state.active = firstImg;
            }
            else {
                state.active = state.active.nextSibling;
            }
            render(state);
        });
    }
    const buttonPrev = document.querySelector('.carousel-control-prev');
    const buttonNext = document.querySelector('.carousel-control-next');
    const firstImg = carouselContainer.firstChild;
    const lastImg = carouselContainer.lastChild;
    const state = { active: firstImg, previous: lastImg,}
    
    ImgsReplacement(state);
    // Конец
};

export default setCarousel;