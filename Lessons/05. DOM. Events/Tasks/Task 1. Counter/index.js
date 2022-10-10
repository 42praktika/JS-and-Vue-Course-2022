const setCounter = () => {
    const button = document.createElement('button');
    let count = 0;
    button.textContent = `Количество нажатий: ${count}`;
    const main = document.getElementsByTagName('div');
    document.body.main.append(button);
};

export default setCounter;