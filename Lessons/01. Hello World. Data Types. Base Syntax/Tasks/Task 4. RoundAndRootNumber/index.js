const roundAndRootNumber = (num) => {
    // Начало
    let returned = 0;
    if (num > 0) {
        returned = (Math.sqrt(num).toFixed(4) + "");
        let new_returned = "";
        for (let i = 0; i < returned.length - 2; i++) {
            new_returned += returned[i];
        }
        return new_returned;
    } else if (num === 0) {
        return "0";
    } else {
        return "error"
    }
    // Конец
};

export default roundAndRootNumber;