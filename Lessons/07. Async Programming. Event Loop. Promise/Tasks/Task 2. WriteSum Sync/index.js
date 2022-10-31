const fs = require("fs");
const path=require("path")
const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const fileOne = fs.readFileSync(pathToFileOne ,'utf8');
    const fileSecond = fs.readFileSync(pathToFileTwo,'utf8' );

    let sum=fileOne.split(', ').reduce((previousValue,currentValue)=>previousValue+parseInt(currentValue),0);
    let sum2=fileSecond.split(', ').reduce((previousValue,currentValue)=>previousValue+parseInt(currentValue),0);

    const Result=sum+sum2;
    fs.writeFileSync(pathToResultFile,String(Result));
};
export default writeSumSync;