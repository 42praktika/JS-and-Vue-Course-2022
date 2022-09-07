const itisCool = (begin, end) => {
    // Начало
    for (let step = begin; step <=  end; step++) {
        if (step % 5 === 0 && step % 3 === 0) {
            console.log("ItisCool");
        } else if (step % 5 === 0) {
            console.log("Cool");
        } else if (step % 3 === 0) {
            console.log("Itis");
        } else {
            console.log(step);
        }
    }
    // Конец
};

export default itisCool;