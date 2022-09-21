const getLastWordLength = (str) => {
    // Начало
        let newStr = str.trim();
        const arrStr = newStr.split(' ');
        let lastStrLength = 0;
        for (let i = 0; i < arrStr.length; i++) {
                lastStrLength = arrStr[arrStr.length - 1].length;
        }
        return lastStrLength;
    // Конец
};

export default getLastWordLength;