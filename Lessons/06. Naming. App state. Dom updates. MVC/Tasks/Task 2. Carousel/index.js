const setCarousel = (imageUrls) => {
    // Начало

    imageUrls = ['\\JS-and-Vue-Course-2022\\Lessons\\06. Naming. App state. Dom updates. MVC\\Tasks\\Task 2. Carousel\\assets\\carousel-1.jpg',
    '\\JS-and-Vue-Course-2022\\Lessons\\06. Naming. App state. Dom updates. MVC\\Tasks\\Task 2. Carousel\\assets\\carousel-2.jpg',
    '\\JS-and-Vue-Course-2022\\Lessons\\06. Naming. App state. Dom updates. MVC\\Tasks\\Task 2. Carousel\\assets\\carousel-3.jpg']

    const inner = document.querySelector('.carousel-inner');
    const firstImg = document.createElement('div');
    const secondImg = document.createElement('div');
    const thirdImg = document.createElement('div');
    firstImg.className = 'carousel-item active';
    secondImg.className = 'carousel-item';
    thirdImg.className = 'carousel-item';
    inner.append(firstImg);
    inner.append(secondImg);
    inner.append(thirdImg);

    const firstShow = document.createElement('img');
    const secondShow = document.createElement('img');
    const thirdShow = document.createElement('img');
    firstShow.className = 'd-block w-100';
    secondShow.className = 'd-block w-100';
    thirdShow.className = 'd-block w-100';
    firstShow.src = imageUrls[0];
    secondShow.src = imageUrls[1];
    thirdShow.src = imageUrls[2];
    firstImg.append(firstShow);
    secondImg.append(secondShow);
    thirdImg.append(thirdShow);


const next = document.querySelector('.carousel-control-next');
const prev = document.querySelector('.carousel-control-prev');

next.addEventListener('click',()=>{
    if (firstImg.className==='carousel-item active'){
        firstImg.className='carousel-item';
        secondImg.className='carousel-item active';
        thirdImg.className='carousel-item';
    } else if (secondImg.className==='carousel-item active'){
        firstImg.className='carousel-item';
        secondImg.className='carousel-item';
        thirdImg.className='carousel-item active';
    } else if(thirdImg.className==='carousel-item active'){
        firstImg.className='carousel-item active';
        secondImg.className='carousel-item';
        thirdImg.className='carousel-item';
    }
})
    prev.addEventListener('click',()=>{
        if (firstImg.className==='carousel-item active'){
            firstImg.className='carousel-item';
            secondImg.className='carousel-item';
            thirdImg.className='carousel-item active';
        } else if (secondImg.className==='carousel-item active'){
            firstImg.className='carousel-item active';
            secondImg.className='carousel-item';
            thirdImg.className='carousel-item';
        } else if(thirdImg.className==='carousel-item active'){
            firstImg.className='carousel-item';
            secondImg.className='carousel-item active';
            thirdImg.className='carousel-item';
        }


    })

    // Конец

};

export default setCarousel;