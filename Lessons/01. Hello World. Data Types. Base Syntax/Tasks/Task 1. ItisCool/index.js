const itisCool = (begin, end) => {
    if (begin > end) {

    } else {
        for (let i = begin; i <= end; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log('ItisCool')
                continue
            }
            if (i % 3 === 0) {
                console.log('Itis')
                continue
            }
            if (i % 5 === 0) {
                console.log('Cool')
            } else {
                console.log(i)
            }
        }
    }
}

itisCool(1,100)
export default itisCool
