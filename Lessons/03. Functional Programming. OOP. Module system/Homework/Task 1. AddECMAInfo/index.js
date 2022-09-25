const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
   const newO = Object.assign({},javaScriptData)
    newO.currentECMA = 2023
    return newO
    // Конец
};

export default addECMAInfo;
export { javaScriptData };