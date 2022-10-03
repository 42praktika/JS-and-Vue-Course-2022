const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    const newObj = {
        currentECMA: 2023
    }
    const javaScriptData = Object.assign(javaScriptData, newObj);
    return javaScriptData
    // Конец
};

export default addECMAInfo;
export { javaScriptData };