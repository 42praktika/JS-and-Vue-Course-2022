const getBudget = (people) => {
    // Начало
    var sum = 0;

    for (let human of people){
        sum += human.budget;
    }
    return sum;
    // Конец
};

export default getBudget;