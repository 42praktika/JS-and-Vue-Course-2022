const initDOM = (imageUrls) => {
    const carouselInner = document.querySelector('.carousel-inner');
    for (let i = 0; i < imageUrls.length; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.setAttribute('class', 'carousel-item' + (i === 0 ? ' active' : ''));
        const img = document.createElement('img');
        img.setAttribute('class', 'd-block w-100');
        img.setAttribute('src', imageUrls[i]);
        carouselInner.append(carouselItem);
        carouselItem.append(img);
    }
}

const render = (nextElement) => {
    document.querySelector('.active').classList.remove('active');
    nextElement.classList.add("active");
}

const app = () => {
    let state = 0;
    const items = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.carousel-control-prev');
    const next = document.querySelector('.carousel-control-next');

    prev.addEventListener('click', () => {
        state - 1 < 0 ? state = items.length - 1 : state--;
        render(items[state]);
    });

    next.addEventListener('click', () => {
        state + 1 === items.length ? state = 0 : state++;
        render(items[state]);
    });
}

const setCarousel = (imageUrls) => {
    // Начало
    initDOM(imageUrls)
    app()
    // Конец
};

export default setCarousel;