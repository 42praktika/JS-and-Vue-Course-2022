const setCarousel = (imageUrls) => {
    init(imageUrls);
    app(imageUrls.length);
};

const init = (imageUrls) => {     // инициализация
    const carouselInner = document.querySelector('.carousel-inner');
    imageUrls.forEach(image => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselInner.append(carouselItem);
        const imgElement = document.createElement('img');
        imgElement.className = "d-block w-100";
        carouselItem.append(imgElement);
        imgElement.src = image;
    })
}

const app = (imageCount) => {  // контроллер
    let positions = {
        position: 0,
        prevPosition: 0
    }

    render(positions)
    const btnNext = document.querySelector(".carousel-control-next");
    const btnPrev = document.querySelector('.carousel-control-prev');
    btnNext.addEventListener('click', event => {
        positions.prevPosition = positions.position;
        positions.position = (positions.position + 1) % imageCount;
        render(positions);
    })
    btnPrev.addEventListener('click', event => {
        positions.prevPosition = positions.position;
        positions.position = (positions.position - 1 + imageCount) % imageCount;
        render(positions)
    })
}

const render = (positions) => {   // рендер
    const carouselInner = document.querySelector('.carousel-inner');
    if (carouselInner.children[positions.prevPosition].classList.contains('active')) {
        carouselInner.children[positions.prevPosition].classList.remove('active');
    }
    carouselInner.children[positions.position].classList.add('active');
}

export default setCarousel;