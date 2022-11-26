export const getRickAndMortyAPI = () => {

    let randomNumber = Math.floor(Math.random() * 43) + 1;
    const url = `https://rickandmortyapi.com/api/character/?page=${randomNumber}`;

    const main = document.querySelector('.main');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const ul = document.createElement('ul');

    const liName = document.createElement('li');
    const liGender = document.createElement('li');
    const liSpecies = document.createElement('li');
    const liStatus = document.createElement('li');
    const liLocation = document.createElement('li');

    div.classList.add('normDiv');
    ul.append(liName, liGender, liSpecies, liStatus, liLocation);
    div.append(img, ul);

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let randomCharacterNumber = Math.floor(Math.random() * 21);
            console.log(data.results[randomCharacterNumber]);
            img.setAttribute('src', data.results[randomCharacterNumber].image);
            liName.textContent = 'Name: ' + data.results[randomCharacterNumber].name;
            liGender.textContent = 'Gender: ' + data.results[randomCharacterNumber].gender;
            liSpecies.textContent = 'Species: ' + data.results[randomCharacterNumber].species;
            liStatus.textContent = 'Status: ' + data.results[randomCharacterNumber].status;
            liLocation.textContent = 'Location: ' + data.results[randomCharacterNumber].location.name;
        })
        .catch(() => {
            throw new Error('smth went wrong');
        });

    main.append(div);
};