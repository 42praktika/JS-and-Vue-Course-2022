const setImegeClasses = (activeIndex) => {
    const images = document.querySelectorAll('.carousel-item');
    for (let image of images) {
        image.classList.remove('active');
    }
    const newActiveImage = [ ...images ][activeIndex];
    newActiveImage.classList.add('active');
};


const setCarousel = (imageUrls) => {
    // Начало
    const state = { // состояние приложения
        images: imageUrls,
        activeIndex: 0,
    };

    const carouselInner = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    state.images.forEach((image, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('carousel-item');
        if (index === 0) {
            imageDiv.classList.add('active');
        }
        const imageElement = document.createElement('img');
        imageElement.classList.add('d-block', 'w-100');
        imageElement.src = image;

        imageDiv.append(imageElement);
        carouselInner.append(imageDiv);
    });

    nextButton.addEventListener('click', () => {
        state.activeIndex = state.activeIndex + 1 >= state.images.length
            ? 0
            : state.activeIndex + 1;

        setImegeClasses(state.activeIndex);
    });


    prevButton.addEventListener('click', () => {
        state.activeIndex = state.activeIndex - 1 < 0
            ? state.images.length - 1
            : state.activeIndex - 1;

        setImegeClasses(state.activeIndex);
    });
    // Конец
};

module.exports = setCarousel;