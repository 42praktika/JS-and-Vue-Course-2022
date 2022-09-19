const getBudget = (people) => {
    let b = 0;
    people.map((obj) => {
        b += obj.budget;
    })
    return b;
};

export default getBudget;