export default function(len, defaultElement) {
    let arr = []
    for (let i = 0; i < len; i++)
    {
        arr[i] = []
        for (let j = 0; j < len; j++) {
            arr[i][j] = defaultElement;
        }
    }
    return arr;
};