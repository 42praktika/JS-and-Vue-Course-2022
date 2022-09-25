const getBudget = (people) => {
    // Начало
    let budget = 0;
    people.forEach(person => {
        budget += person.budget;
    });
    return budget;
    // Конец
};

export default getBudget;