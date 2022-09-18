const getLastWordLength = (str) => {
    // Начало
    str=str.trim().split(' ');
    str=str[str.length - 1];
  return str.length;
    // Конец
};
export default getLastWordLength;