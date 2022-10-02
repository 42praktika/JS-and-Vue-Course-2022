const reorderDigits = (rule, ...numbers) => {
    if (rule === 'asc') return numbers.sort((a, b) => Number(a) - Number(b));
    else if (rule === 'desc') return numbers.sort((a, b) => Number(b) - Number(a));
};

export default reorderDigits;