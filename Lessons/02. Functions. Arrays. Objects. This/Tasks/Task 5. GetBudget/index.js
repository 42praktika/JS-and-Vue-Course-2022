const getBudget = (people) => {
    // Начало
    let result = 0;
    for (let person of people) {
        result += person.budget;
    }
    return result
    // Конец
};

export default getBudget;