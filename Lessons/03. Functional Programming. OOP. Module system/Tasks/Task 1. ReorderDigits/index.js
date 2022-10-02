const reorderDigits = (type, ...numbers) => {
    // Начало
    if(type===`asc`){
     return numbers.sort((a, b) => a - b);
    }
    else{
     return numbers.sort(((a, b) => b - a));
    }    // Конец
};

export default reorderDigits;