const getBudget = (people) => {
    // Начало
    let sum = 0;
    for (let  man of people){
        sum+=man.budget;
    }
    return sum;
    // Конец
};

export default getBudget;