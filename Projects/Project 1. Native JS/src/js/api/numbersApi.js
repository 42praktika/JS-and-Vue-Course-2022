const url = 'http://numbersapi.com/';
export const getFactPromise = async (number) => {
    try {
        const response = await fetch(url + number);
        return await response.text();
    } catch (error) {
        console.log(error)
    }
}
