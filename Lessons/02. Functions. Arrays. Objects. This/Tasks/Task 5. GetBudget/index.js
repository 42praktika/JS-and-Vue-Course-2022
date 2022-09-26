const getBudget = (people) => {

    let counter = 0;
    for(let k of people) {
        counter = counter + k.budget;
    }
    return counter;
};

export default getBudget;