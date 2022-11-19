import {factState} from "./state.js";

export const catfacts = () => {
    const modal = document.querySelector('.modal-content')
    const list = document.createElement('div');
    list.classList = 'facts-list';
    modal.append(list);
    const button = document.createElement('button')
    button.classList = 'btn'
    button.textContent = 'Get fact!'
    modal.append(button)
    button.addEventListener('click', () => {
        fetch('https://meowfacts.herokuapp.com/?lang=rus')
            .then(response => response.json())
            .then(facts => (factState.facts = factState.facts.concat(facts)))
            .catch(err => console.error(err));
        factList(factState.facts)
    })
}

const createFact = (fact) =>
    '<div class="fact"><p>' + fact.data + '</p></div>'

const factList = (facts) => {
    const list = document.querySelector('.facts-list')
    list.innerHTML = ' ';
    if (facts.length) {
        facts.forEach((fact) => list.innerHTML = createFact(fact))
    }
}




