const reorderDigits = () => {

    let arr = Array.prototype.slice.call(arguments);

    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length() - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }

    if (arguments[0] === 'asc') return bubbleSort(arr.slice(1, arr.length));
    if (arguments[0] === 'desc') return bubbleSort(arr.slice(1, arr.length)).reverse();
};

export default reorderDigits;