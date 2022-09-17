const transformFortyTwo = (numbers) => {
    // Начало
    var fortyTwo = numbers.map(
        function a (curr) {
            if ((curr % 42) === 0) {
                return "forty two!";
            } else{
                return curr;
            }
        }
    );
    return fortyTwo;
    // Конец
};

export default transformFortyTwo;