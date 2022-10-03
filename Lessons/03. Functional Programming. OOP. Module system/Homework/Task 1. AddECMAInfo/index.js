const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    const ECMAInfo = {
        currentECMA: 2023
    };
    const new_data = Object.assign({}, javaScriptData, ECMAInfo);
    return new_data;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };