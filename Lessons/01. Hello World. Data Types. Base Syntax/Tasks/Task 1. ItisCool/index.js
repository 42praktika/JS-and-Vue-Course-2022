const itisCool = (begin, end) => {
    let n;
    for (n = begin; n <= end; n++) {
        if (n % 3 == 0 & n % 5 == 0) {
            console.log("ItisCool")
        }
        else if (n % 3 == 0) {
            console.log("Itis")
        }
        else if (n % 5 == 0) {
            console.log("Cool")
        }
        else console.log(n)
    }
};

export default itisCool;