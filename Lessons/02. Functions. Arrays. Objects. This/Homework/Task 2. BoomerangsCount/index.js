const getBoomerangsCount = (numbers) => {
    let count=0
    if (numbers.length<3) {
        return 0;
    }
    else {
        for (let i=0;i<numbers.length-2;i++) {
            if (numbers[i]===numbers[i+2] && numbers[i+1]!==numbers[i]){
                count++;
            }
        }
        return count;
    }
};

export default getBoomerangsCount;