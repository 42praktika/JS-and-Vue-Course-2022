function itisCool(a, b){
    // Начало
    for (i = a; i<=b; i++) {
        if (i%3 === 0 && i%5 !== 0) {
            console.log('Itis')
        } else if (i%5 === 0 && i%3 !== 0) {
            console.log('Cool')
        } else if (i%3 === 0 && i%5 === 0) {
            console.log('ItisCool')
        } else {
            console.log(i)
        }
    }
    // Конец
};

export default itisCool;