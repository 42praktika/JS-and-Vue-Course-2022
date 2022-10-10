const setCounter = () => {
    // Начало

  const elem = document.querySelector('div');
  const newEl = document.createElement('button');
  newEl.className = 'btn btn-warning'
  elem.prepend(newEl);
  let num=0;
  newEl.addEventListener('click',function (){
    num++;
    return newEl.textContent='Количество нажатий: ' + num;
  })
  newEl.textContent='Количество нажатий: ' + num;
    // Конец
};

export default setCounter;