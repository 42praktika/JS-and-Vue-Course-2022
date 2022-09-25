const getBudget = (people) => {
    // Начало
    let sumBudget = 0;
    for (const person of people) {
        sumBudget += person.budget;
    }
    return sumBudget;
    // Конец
};

export default getBudget;