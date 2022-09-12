const itisCool = (begin, end) => {
    // Начало
    for (let i = begin; i < end + 1; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("ItisCool")
            }
            else {
                console.log("Itis")
            }
        }
        else if (i % 5 == 0) {
            console.log("Cool")
        }
        else {
            console.log(i)
        }
    }
    // Конец
};

export default itisCool;