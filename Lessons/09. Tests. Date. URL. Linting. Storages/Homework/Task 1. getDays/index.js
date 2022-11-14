const getDaysAmount = (month, year) => {
    // Начало
    const currentDateValue = 31 - new Date(`${month} 31, ${year} 00:00:00`).getDate();
    if (currentDateValue.toString() === "NaN"){
        return "error";
    }
    return (currentDateValue === 0) ? 31: currentDateValue;
};

export default getDaysAmount;