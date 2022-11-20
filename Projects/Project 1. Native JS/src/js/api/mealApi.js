const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
export const getMealPromise = async (category) => {
    try {
        const response = await fetch(url + category);
        return (await response.json())['meals'];
    } catch (error) {
        console.log(error)
    }
}
