const setCarousel = (imageUrls) => {
    const carousel = document.querySelector(".carousel-inner")

    const render = (status) => {
        const carousel_item = document.querySelectorAll('.carousel-item')
        let carousel_active = document.querySelector('.active')
        carousel_active.classList.remove('active')
        carousel_item[status.current_img].classList.add('active')
    }

    const state = {
        current_img : 0,
        array_image : imageUrls,
    }

    imageUrls.forEach((image) => {
        let div = document.createElement('div')
        div.className = 'carousel-item'

        let img = document.createElement('img')
        img.classList.add('d-block', 'w-100')
        img.src = image

        div.append(img)
        carousel.append(div)
    })

    document.querySelector('.carousel-item').classList.add('active')

    const next_img = document.querySelector('.carousel-control-next')

    next_img.addEventListener('click', () => {
        if (state.current_img === state.array_image.length - 1) {
            state.current_img = 0
        }
        else {
            state.current_img += 1
        }

        render(state)
    })

    const prev_img = document.querySelector('.carousel-control-prev')

    prev_img.addEventListener('click', () => {
        if (state.current_img === 0) {
            state.current_img = state.array_image.length - 1
        }
        else {
            state.current_img -= 1
        }

        render(state)
    })
};

export default setCarousel;