// https://axios-http.com/

// get-запрос
axios.get('/getorgs.php', {
    params: {
        fio: 'Что-то написано',
        type: 'json',
    },
})
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });



// post-запрос
axios.post('/user', {
    firstName: 'Elon',
    lastName: 'Musk',
})
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });