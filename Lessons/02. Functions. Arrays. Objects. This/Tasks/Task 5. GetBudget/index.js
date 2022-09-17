const getBudget = (people) => {
    // Начало
    let budget = 0;
    for (let human of people) {
        budget += human.budget;
    }
    return budget;
    // Конец
};

export default getBudget;