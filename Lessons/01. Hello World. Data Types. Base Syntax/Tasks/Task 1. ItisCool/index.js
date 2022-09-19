const itisCool = (begin, end) => {
    for (let i = begin; i <= end ; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("ItisCool");
        else if (i%3 === 0) console.log("Itis");
        else if (i%5 === 0) console.log("Cool");
        else console.log(i)
    }
};

export default itisCool;