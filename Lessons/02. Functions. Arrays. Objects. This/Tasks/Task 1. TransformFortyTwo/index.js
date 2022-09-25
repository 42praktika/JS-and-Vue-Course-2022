const transformFortyTwo = (numbers) => {
    // Начало
    return numbers.map(Func42);
    function Func42(num){
        if(num % 42 === 0){
            num = 'forty two!';      
        }
        return num;
    }
    // Конец
};

export default transformFortyTwo;