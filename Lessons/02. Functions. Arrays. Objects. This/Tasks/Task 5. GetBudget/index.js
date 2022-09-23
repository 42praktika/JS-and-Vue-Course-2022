const getBudget = (people) => {
    let allBudget = 0
    for (let person = 0; person < people.length; person++) {
        allBudget += people[person].budget
    }
    return allBudget
}
export default getBudget;