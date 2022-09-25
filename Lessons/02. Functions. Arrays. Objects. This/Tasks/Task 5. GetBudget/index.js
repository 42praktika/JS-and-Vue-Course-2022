const getBudget = (people) => {
    // Начало
    return people.reduce((acc, item) => acc + item.budget, 0);
    // Конец
};

export default getBudget;