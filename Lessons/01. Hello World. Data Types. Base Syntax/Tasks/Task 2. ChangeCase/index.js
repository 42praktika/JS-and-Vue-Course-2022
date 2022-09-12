const changeCase = (str) => {
    // Начало
    var count = str.length;
    var strlist= str.split(" ");
    for (let i = 0; i < count; i++) {
        if (str[i].toUpperCase() === str[i]) {
            strlist[i] = str[i].toLowerCase();
        } else {
            strlist[i] = str[i].toUpperCase();
        }
    }
    str = strlist.join('');
    console.log(str);
    return str;
    // Конец
};

export default changeCase;