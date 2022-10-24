const setCarousel = (imageUrls) => {

    const carouselInner = document.querySelector('.carousel-inner');

    for (let i = 0; i < imageUrls.length; i++) {
        const Div = document.createElement('div');
        Div.setAttribute('class', 'carousel-item');
        const carouselImg = document.createElement('img');
        carouselImg.setAttribute('class', 'd-block w-100');
        carouselImg.setAttribute('src', imageUrls[i]);
        Div.append(carouselImg);
        carouselInner.append(Div);
    }

    const state = {
        currentImg : 0
    };
    document.querySelector('.carousel-item').classList.add('active');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    nextButton.addEventListener('click', () => {
        if (state.currentImg < imageUrls.length - 1) {
            state.currentImg++;
        }
        else {
            state.currentImg = 0;
        }
        render(state);
    });

    prevButton.addEventListener('click', () => {
        if (state.currentImg === 0) {
            state.currentImg = imageUrls.length - 1;
        }
        else {
            state.currentImg--;
        }
        render(state);
    })

    const render = (state) => {
        const carouselItem = document.querySelectorAll('.carousel-item');
        let activeEl = document.querySelector('.active');
        activeEl.classList.remove('active');
        carouselItem[state.currentImg].classList.add('active');
    }


};

export default setCarousel;