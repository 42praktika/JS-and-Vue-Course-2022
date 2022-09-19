const getBudget = (people) => {
    return people.reduce((acc, p) => {
        return acc + p.budget;
    }, 0);
};

export default getBudget;