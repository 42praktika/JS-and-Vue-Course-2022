const reorderDigits = (type, ...numbers) => {

    let arr = Array.prototype.slice.call(numbers);

    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }

    if (type === 'asc') return bubbleSort(arr.slice(0, arr.length));
    if (type === 'desc') return bubbleSort(arr.slice(0, arr.length)).reverse();
};

export default reorderDigits;