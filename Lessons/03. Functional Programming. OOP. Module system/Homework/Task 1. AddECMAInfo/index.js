const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    return Object.assign({}, javaScriptData,{
        currentECMA: 2023
    });
    // Конец
};

export default addECMAInfo;
export { javaScriptData };