const reorderDigits = (str, ...arr) => {
        // Начало
    if (str === 'asc') {
        return arr.sort(compareNumbers);
    }
    if (str === 'desc') {
        return arr.sort(compareNumbers).reverse();
    }
        // Конец

};
const compareNumbers = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
export default reorderDigits;
