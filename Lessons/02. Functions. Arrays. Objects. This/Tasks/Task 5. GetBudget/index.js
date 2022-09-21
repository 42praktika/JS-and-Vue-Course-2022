const getBudget = (people) => {
    // Начало
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        const valuesArr = Object.values(people[i]);
        sum += valuesArr[valuesArr.length - 1];
    }
    return sum;
    // Конец



    //Второй способ

    /*
    const getBudget = (people) => {
    // Начало
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        let {budget} = people[i];
        sum += budget;
    }
    return sum;
};
    // Конец
     */
};

export default getBudget;