const getBudget = (people) => people
    .map(({ budget }) => budget)
    .reduce((acc, budget) => acc + budget, 0);

export default getBudget;