const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    return Object.assign({}, javaScriptData, {currentECMA: 2023})
};

export default addECMAInfo;
export { javaScriptData };