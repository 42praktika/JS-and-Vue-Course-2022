const getBudget = (people) => {
    let sum = 0
    for (let i = 0; i < people.length; i++) {
        let {budget} = people[i]
        sum += budget
    }
    return sum
};
export default getBudget;