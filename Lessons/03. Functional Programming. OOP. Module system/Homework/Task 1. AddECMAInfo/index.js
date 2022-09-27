const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
     const newObj = {};
     for (let key in javaScriptData) {
         newObj[key] = javaScriptData[key];
     }
     newObj.currentECMA = 2023;
     return newObj;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };