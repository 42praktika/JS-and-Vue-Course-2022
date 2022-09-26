const itisCool = (begin, end) => {
    // Начало
    for (let i = begin; i <= end; i += 1) {
        const hasItis = i % 3 === 0;
        const hasCool = i % 5 === 0;
        const itisPart = hasItis ? 'Itis' : '';
        const coolPart = hasCool ? 'Cool' : '';
        console.log(`${itisPart}${coolPart}` || i);
    }
    // Конец
};

export default itisCool;