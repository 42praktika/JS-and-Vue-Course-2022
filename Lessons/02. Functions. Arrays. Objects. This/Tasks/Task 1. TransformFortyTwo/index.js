const transformFortyTwo = (numbers) => {
    let array = numbers.map((num) => {
        if (num % 42 !== 0) {
            return num;
        } else {
            return "forty two!"
        }
    })
    return array;
}

export default transformFortyTwo;