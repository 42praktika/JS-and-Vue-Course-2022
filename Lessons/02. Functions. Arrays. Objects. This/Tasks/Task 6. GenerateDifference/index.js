// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    // Начало
    const answer = new Map();
    const entr1 = Object.entries(objOne);
    const entr2 = Object.entries(objTwo);
    for (let i = 0; i < entr1.length; i++) {
        if (entr1[i][0] in objTwo) {
            if (entr1[i][1] === objTwo[entr1[i][0]]) {
                answer.set(entr1[i][0], "unchanged");
            } else {
                answer.set(entr1[i][0], "changed");
            }
        } else {
            answer.set(entr1[i][0], "deleted");
        }
    }
    for (let i = 0; i < entr2.length; i++) {
        if (!(entr2[i][0] in objOne)) {
            answer.set(entr2[i][0], "added");
        }
    }
    const ans = Object.fromEntries(answer);
    return ans;
    // Конец
};

export default generateDifference;