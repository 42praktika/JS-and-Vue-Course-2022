const roundAndRootNumber = (num) => num < 0
    ? 'error'
    : String(Math.floor(Math.sqrt(num) * 100) / 100);


export default roundAndRootNumber;