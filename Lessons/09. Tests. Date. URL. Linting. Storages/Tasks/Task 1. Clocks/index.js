const setRotations = () => {
    const currentDate = new Date();

    const hoursAngle = 30 * currentDate.getHours();
    const minutesAngle = 6 * currentDate.getMinutes();
    const secondsAngle = 6 * currentDate.getSeconds();

    const hoursArrow = document.querySelector('.clocks__hour');
    const minutesArrow = document.querySelector('.clocks__minute');
    const secondsArrow = document.querySelector('.clocks__second');

    hoursArrow.style.transform = 'rotate(' + hoursAngle + 'deg)';
    minutesArrow.style.transform = 'rotate(' + minutesAngle + 'deg)';
    secondsArrow.style.transform = 'rotate(' + secondsAngle + 'deg)';
};

const runClocks = () => {
    // Начало
    setRotations();
    setInterval(setRotations, 1000);
    // Конец
};

export default runClocks