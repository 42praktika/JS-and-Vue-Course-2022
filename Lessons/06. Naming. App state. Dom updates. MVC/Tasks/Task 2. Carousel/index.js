const setCarousel = (imageUrls) => {
    // Начало
    let carousel = document.querySelector('.carousel-inner');

    const render = (state) => {
        const items = document.querySelectorAll('.carousel-item');
        let oldActive = document.querySelector('.active');
        oldActive.classList.remove('active');
        items[state.currImg].classList.add('active');
    }

    const state = {
        currImg : 0,
    };

    imageUrls.forEach((image) => {
        let div = document.createElement('div');
        div.className = 'carousel-item';
        let img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = image;
        div.append(img);
        carousel.append(div);
    });

    document.querySelector('.carousel-item').classList.add('active');

    const nextImg = document.querySelector('.carousel-control-next');

    nextImg.addEventListener('click', () => {
        if (state.currImg < imageUrls.length - 1) {
            state.currImg++;
        } else {
            state.currImg = 0;
        }
        render(state);
    });

    const prevImg = document.querySelector('.carousel-control-prev');
    prevImg.addEventListener('click', () => {
        if (state.currImg === 0) {
            state.currImg = imageUrls.length - 1;
        } else {
            state.currImg--;
        }
        render(state);
    });

    // Конец
};

export default setCarousel;