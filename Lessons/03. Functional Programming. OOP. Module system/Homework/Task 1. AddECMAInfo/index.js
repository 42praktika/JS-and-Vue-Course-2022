const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const makeCopy = (obj) => {
    let copy = {};
    let key;

    for (key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}


const addECMAInfo = () => {
    let newJavaScriptData = makeCopy(javaScriptData);
    newJavaScriptData.currentECMA = 2023;
    return newJavaScriptData;
};

export default addECMAInfo;
export { javaScriptData };