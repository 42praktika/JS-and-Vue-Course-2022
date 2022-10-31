// localStorage

storage = window.localStorage;

window.localStorage.setItem('current-urls', '[]');
const urls = window.localStorage.getItem('current-urls');
window.localStorage.removeItem('current-urls');
window.localStorage.clear();


// JSON
const testData = { 'one': 1, 'two': 2, 'three': 3 };

window.localStorage.setItem('data', JSON.stringify(testData));
const data = JSON.parse(window.localStorage.getItem('data'));











// sessionStorage
storage = window.sessionStorage;
