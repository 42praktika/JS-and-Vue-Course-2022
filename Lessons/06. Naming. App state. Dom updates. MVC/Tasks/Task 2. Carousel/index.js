const setCarousel = (imageUrls) => {
    let position = 0;

    const btnNext = document.querySelector(".carousel-control-next");
    const btnPrev = document.querySelector('.carousel-control-prev');
    const carouselInner = document.querySelector('.carousel-inner');

    for(let i = 0; i < imageUrls.length; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselInner.append(carouselItem);
        const image = document.createElement('img');
        image.className = "d-block w-100";
        carouselItem.append(image);
        image.src = imageUrls[i];
    }

    carouselInner.firstElementChild.classList.add('active');
    btnNext.addEventListener('click', event => {
        carouselInner.children[position].classList.remove('active');
        position = (position + 1) % 3;
        carouselInner.children[position].classList.add('active');
    })
    btnPrev.addEventListener('click', event => {
        carouselInner.children[position].classList.remove('active');
        position = (position - 1 + 3) % 3;
        carouselInner.children[position].classList.add('active');
    })
};

export default setCarousel;