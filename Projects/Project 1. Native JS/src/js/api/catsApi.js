const url = 'http://aws.random.cat/meow';

export const getCat = async () => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error) // TODO надо наверное как-то обработать, хотя хз
    }
}
