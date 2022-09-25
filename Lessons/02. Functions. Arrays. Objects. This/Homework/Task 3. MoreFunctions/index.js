const moreFunction = (number) => {
    // Начало
  const newArray = (array) => {
    for(let i = 0; i < array.length; i++){
         array[i] = array[i] / number;
    }
    return array;
  }
  return newArray;
    // Конец
};

export default moreFunction;