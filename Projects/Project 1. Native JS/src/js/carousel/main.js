export const openCarousel = (arrayOfMeal, carouselContainer) => {

    carouselContainer.innerHTML = '';

    const imageUrls = arrayOfMeal.map(meal => meal['strMealThumb']);
    const imageTitles = arrayOfMeal.map(meal => meal['strMeal']);

    const initializationDOM = () => {

        for (let i = 0; i < imageUrls.length; i++) {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            const image = document.createElement('img');
            image.setAttribute('src', imageUrls[i]);

            const title = document.createElement('h1');
            title.textContent = imageTitles[i];

            carouselItem.append(title);
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
    const buttonPrev = document.createElement('div');
    buttonPrev.textContent = 'Previous image';
    buttonPrev.className = 'carousel-control-prev';
    const buttonNext = document.createElement('div');
    buttonNext.textContent = 'Next image';
    buttonNext.className = 'carousel-control-next';
    const firstImg = carouselContainer.firstChild;
    const lastImg = carouselContainer.lastChild;
    const state = {
        active: firstImg,
        previous: lastImg,
    }
    watchState();
    render(state);

    carouselContainer.append(buttonPrev);
    carouselContainer.append(buttonNext);
}
