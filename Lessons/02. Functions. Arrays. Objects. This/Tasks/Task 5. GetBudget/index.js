const getBudget = (people) => {
    // Начало
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        sum += people[i].budget;
    }
    return sum;

    // Конец
};

export default getBudget;