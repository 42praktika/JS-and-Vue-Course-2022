const ASC_TYPE = 'asc';

const getSortFunc = (type) => (a, b) => type === ASC_TYPE ? a - b : b - a;

const reorderDigits = (type, ...numbers) => numbers.sort(getSortFunc(type));

export default reorderDigits;