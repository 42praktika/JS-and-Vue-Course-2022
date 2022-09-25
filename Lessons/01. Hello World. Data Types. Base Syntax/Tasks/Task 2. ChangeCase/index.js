const changeCase = (str) => {
    // Начало
    let res = "";
    for (let i = 0; i < str.length; i+=1){
        if (str[i] === str[i].toUpperCase()){
            res += str[i].toLowerCase();
        }
        else {
            res += str[i].toUpperCase();
        }
    }
    return res;
    // Конец
};

export default changeCase;