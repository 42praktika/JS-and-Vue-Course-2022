const PLAYSERS = {
    FIRST: 'first',
    SECOND: 'second',
};

const BLOCKS = {
    START: 'start',
    GAME: 'game',
    FINISH: 'finish',
};

const updateNames = (players) => {
    Object.keys(players).forEach((player) => {
        const nameElement = document.querySelector('.cities__user-name--' + player);
        nameElement.textContent = players[player];
        const input = document.getElementById('name-' + player);
        input.value = '';
    });
};

const updateActiveName = (state) => {
    Object.keys(state.players).forEach((player) => {
        const playerNameElement = document.querySelector('.cities__user-name--' + player);
        if (state.activePlayer === player) {
            playerNameElement.classList.add('active');
        } else {
            playerNameElement.classList.remove('active');
        }
    });
};

const updateActiveBlock = (state) => {
    const blocks = document.querySelectorAll('.cities__main-block');
    [ ...blocks ].forEach((block) => {
        block.classList.remove('active');
    });
    const newActiveBlock = document.querySelector('.cities__' + state.activeBlock + '-block');
    newActiveBlock.classList.add('active');
};

const renderNewCity = (state, newCityName) => {
    const currentCitiesBlock = document.querySelector('.cities__user-cities--' + state.activePlayer);
    const newCitySpan = document.createElement('span');
    newCitySpan.textContent = newCityName;
    currentCitiesBlock.append(newCitySpan);
};

const resetCities = () => {
    const currentCitiesBlocks = document.querySelectorAll('.cities__user-cities');
    currentCitiesBlocks.forEach((el) => el.innerHTML = '');
};

const renderFinishAlert = (winner) => {
    const alertElement = document.querySelector('.alert-success');
    alertElement.textContent = `Ошибка! Игрок ${winner} одержал победу!`;
};

const resetCityInput = () => {
    const cityInput = document.getElementById('new-city');
    cityInput.value = '';
};

const setCitiesGame = () => {
    // Начало
    // Выделяем слой Model
    const state = {
        activeBlock: BLOCKS.START,
        activePlayer: PLAYSERS.FIRST,
        cities: [],
        players: {
            first: '',
            second: '',
        },
    };

    const startButton = document.querySelector('.cities__button--start');
    const addButton = document.querySelector('.cities__button--add');
    const restartButton = document.querySelector('.cities__button--restart');

    // Мозги прииложения - слой Controller
    startButton.addEventListener('click', () => {
        const firstPlayerInput = document.getElementById('name-first');
        const secondPlayerInput = document.getElementById('name-second');

        state.players.first = firstPlayerInput.value;
        state.players.second = secondPlayerInput.value;
        if (state.players.first === '' || state.players.second === '') {
            alert('Введите непустое имя!');
        } else {
            state.activeBlock = BLOCKS.GAME;

            // Функции рендеринга - работа со слоем View
            updateActiveBlock(state);
            updateNames(state.players);
        }
    });


    addButton.addEventListener('click', () => {
        const addInput = document.getElementById('new-city');
        const newCityName = addInput.value;


        const addNewCity = (state, newCityName) => {
            const newWordObject = { player: state.activePlayer, cityName: newCityName };
            state.cities.push(newWordObject);

            // Функции рендеринга - работа со слоем View
            renderNewCity(state, newCityName);

            state.activePlayer = state.activePlayer === PLAYSERS.FIRST ? PLAYSERS.SECOND : PLAYSERS.FIRST;
            updateActiveName(state);
            resetCityInput();
        };

        if (state.cities.length === 0) {
            addNewCity(state, newCityName);
        } else {
            const lastCityName = state.cities[state.cities.length - 1].cityName;
            const lastLetter = lastCityName[lastCityName.length - 1];
            const isLetterCorrect = newCityName[0].toLowerCase() === lastLetter.toLowerCase();

            if (isLetterCorrect) {
                addNewCity(state, newCityName);
            } else {
                const winner = state.activePlayer === PLAYSERS.FIRST ? PLAYSERS.SECOND : PLAYSERS.FIRST;
                state.activeBlock = BLOCKS.FINISH;

                // Функции рендеринга - работа со слоем View
                renderFinishAlert(state.players[winner]);
                updateActiveBlock(state);
            }
        }
    });

    restartButton.addEventListener('click', () => {
        state.players.first = '';
        state.players.second = '';
        state.activeBlock = BLOCKS.START;
        state.cities = [];
        state.activePlayer = PLAYSERS.FIRST;

        // Функции рендеринга - работа со слоем View
        resetCities();
        updateActiveBlock(state);
        updateActiveName(state);
        updateNames(state.players);
        resetCityInput();
    });
    // Конец
};

module.exports = setCitiesGame;