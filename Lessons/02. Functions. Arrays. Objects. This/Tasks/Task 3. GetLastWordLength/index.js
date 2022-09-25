const getLastWordLength = (str) => {
    // Начало
    let newStr = str.trim();
let arr=newStr.split(' ');
let last = arr[arr.length-1];
let len = last.length;
if (str===' '){
    return str
}
return len;
    // Конец
};

export default getLastWordLength;