const reorderDigits = (str) => {
    const array = []
    console.log(str)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments)
        if (str === "asc") {
            array.push(str[i])
            return array.sort()
        }
        else if (str === "desc") {
            array.push(str[i])
            return array.sort().reverse()
        }
    }
};

console.log(reorderDigits('asc', 10, 322, 100, 2414, 3))
// export default reorderDigits;