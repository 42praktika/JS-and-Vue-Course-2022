// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');

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
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const images = document.querySelectorAll('.carousel-item');
    for (let image of images) {
        image.classList.remove('active');
    }
    const newActiveImage = [ ...images ][activeImageIndex];
    newActiveImage.classList.add('active');
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    nextButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex + 1 >= state.images.length
            ? 0
            : state.activeImageIndex + 1;

        render(state.activeImageIndex);
    });

    prevButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex - 1 < 0
            ? state.images.length - 1
            : state.activeImageIndex - 1;

        render(state.activeImageIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    // определяем состояние приложения
    const state = {
        images: imageUrls,
        activeImageIndex: 0,
    };

    // инициализируем DOM
    initDOM(state);

    // навешиваем обработчики событий интерфейса
    addListeners(state);
};

export default setCarousel;