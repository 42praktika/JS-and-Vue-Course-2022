const setCarousel = (imageUrls) => {
    const state = {
        thisImgIndex: 0,
        prevImgIndex: 0,
        imagesCount: imageUrls.length
    }

    const carouselInner = document.querySelector('div.carousel-inner');

    imageUrls.forEach(url => {
        const carouselItem = document.createElement('div');
        carouselItem.className = "carousel-item";
        const carouselItemImage = document.createElement('img');
        carouselItemImage.className = "d-block w-100";
        carouselItemImage.src = url;

        carouselItem.append(carouselItemImage);
        carouselInner.append(carouselItem);
    })

    addEventListeners(state);
    render(state);
};

const addEventListeners = (state) => {
    const prevButton = document.querySelector('button.carousel-control-prev');
    const nextButton = document.querySelector('button.carousel-control-next');

    prevButton.addEventListener('click', (event) => {
        state.prevImgIndex = state.thisImgIndex;

        if ((state.thisImgIndex - 1) < 0)
        {
            state.thisImgIndex = state.imagesCount - 1;
        }
        else
        {
            state.thisImgIndex -= 1;
        }

        render(state);
    })

    nextButton.addEventListener('click', (event) => {
        state.prevImgIndex = state.thisImgIndex;

        if ((state.thisImgIndex + 1) === state.imagesCount)
        {
            state.thisImgIndex = 0;
        }
        else
        {
            state.thisImgIndex += 1;
        }

        render(state);
    })
};

const render = (state) => {
    const carouselItems = document.querySelector('.carousel-inner').children;

    carouselItems[state.prevImgIndex].className = "carousel-item";
    carouselItems[state.thisImgIndex].classList.add("active");
};

export default setCarousel;