const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    let imm= {...javaScriptData,currentECMA:2023}
    return imm;
};

export default addECMAInfo;
export { javaScriptData };
