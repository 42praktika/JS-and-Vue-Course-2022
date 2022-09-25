const getBoomerangsCount = (numbers) => {
    // Начало
if (numbers.length <3){
    return 0
}
var arr=[]
    var count=0
    for (let i = 0; i < numbers.length; i++) {
        arr = numbers.slice(i, i + 3)
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[j + 2] && arr[j] !== arr[j + 1]) {
                count += 1
            }
        }
    }
    return count
    // Конец
};

export default getBoomerangsCount;