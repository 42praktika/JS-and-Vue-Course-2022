const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    javaScriptData.currentECMA = 2023;
    return javaScriptData;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };