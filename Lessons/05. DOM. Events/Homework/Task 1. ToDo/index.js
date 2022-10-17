const setToDo = () => {
   let element1=document.querySelector('.to-do__main')
   let newInput=document.createElement('input')

   newInput.placeholder="Введите наименование задачи"

   let newButtonDP=document.createElement('button')
   newButtonDP.textContent="Добавить в план"
   let newButtonDS=document.createElement('button')
   newButtonDS.textContent="Добавить в сделанные"

   newButtonDS.classList.add('btn', 'btn-danger');
   newButtonDP.classList.add('btn', 'btn-success');

   element1.append(newInput)
   element1.append(newButtonDP)
   element1.append(newButtonDS)
   //------------------------------------------------------------------------------------------------
   newButtonDP.addEventListener("click",()=>{
      let element2=document.querySelector('.to-do__tasks')
      let newSpan2=document.createElement('span')
      element2.append(newSpan2)
      newSpan2.dataset.type='planned'
      let whatWrite=newSpan2.textContent = newInput.value
      newInput.value=""
      return whatWrite


   });
   newButtonDS.addEventListener("click",()=>{
      let element3=document.querySelector('.to-do__tasks')
      let newSpan3=document.createElement('span')
      newSpan3.dataset.type='completed'
      element3.append(newSpan3)
      let whatWrite=newSpan3.textContent = newInput.value
      newInput.value=""
      return whatWrite
   });
   const deleteSpans=document.querySelector('.to-do__tasks')
   deleteSpans.addEventListener('click',()=> {
      const newSpan=document.querySelector('span')
      newSpan.remove()
   });






};

export default setToDo;