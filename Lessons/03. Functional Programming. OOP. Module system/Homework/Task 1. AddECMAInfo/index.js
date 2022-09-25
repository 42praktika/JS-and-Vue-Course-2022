const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    const answer = {
        ...javaScriptData,
        currentECMA: 2023
    };
    return answer;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };