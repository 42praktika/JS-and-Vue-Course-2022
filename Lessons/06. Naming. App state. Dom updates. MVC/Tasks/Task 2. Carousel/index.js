const setCarousel = (imageUrls) => {
    // Начало
    const state = {
        currentIndexOfUrl: 0
    }

    // Своего рода костыль
    let arrayOfUrls = [];
    for (let i = 0; i < imageUrls.length; i++) {
        arrayOfUrls.push(imageUrls[i]);
    }

    const carouselInner = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control-next');
    const previousButton = document.querySelector('.carousel-control-prev');

    // Еще костыль
    const firstIndex = 0;
    let iterator = 0;

    arrayOfUrls.forEach((url) => {
        const div = document.createElement('div');
        const img = document.createElement('img');

        div.append(img);
        carouselInner.append(div);

        // Продолжение костыля
        if (iterator === firstIndex) {
            div.className = 'carousel-item active';
        } else div.className = 'carousel-item';

        img.classList.add('d-block', 'w-100');
        img.src = url;

        iterator++;
    })

    const changeActivity = (urlIndex) => {
        const allUrls = document.querySelectorAll('.carousel-item');
        for (let i = 0; i < allUrls.length; i++) {
            if (i === urlIndex) {
                allUrls[i].classList.add('active');
            } else allUrls[i].classList.remove('active');
        }
    };

    nextButton.addEventListener('click', () => {
        if (state.currentIndexOfUrl < arrayOfUrls.length - 1) {
            state.currentIndexOfUrl++;
        } else state.currentIndexOfUrl = 0;

        changeActivity(state.currentIndexOfUrl);
    })

    previousButton.addEventListener('click', () => {
        if (state.currentIndexOfUrl > 0) {
            state.currentIndexOfUrl--;
        } else state.currentIndexOfUrl = arrayOfUrls.length - 1;

        changeActivity(state.currentIndexOfUrl);
    })
    // Конец
};

export default setCarousel;