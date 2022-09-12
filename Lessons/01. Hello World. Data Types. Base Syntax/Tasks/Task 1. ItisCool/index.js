const itisCool = (begin, end) => {
    // Начало
    for (let begin = 11; end <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("ItisCool")
        }
        else if (i % 5 === 0) {
            console.log("Cool")
        }
        else if (i % 3 === 0) {
            console.log("Itis")
        }
        else {
            console.log(i)
        }
    }
    // Конец
};

export default itisCool;