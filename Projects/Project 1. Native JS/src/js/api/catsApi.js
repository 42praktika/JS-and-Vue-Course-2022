const url = 'http://aws.random.cat/meow';
export const getCatPromise = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.file;
    } catch (error) {
        console.log(error)
    }
}
