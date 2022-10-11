const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
//Use seamless-immutable.js
var state = Immutable({
    style : {
       color : {
          r : 128,
          g : 64,
          b : 32
       },
       font : {
          family : 'sans-serif',
          size : 14
       }
    },
    text : 'Example',
    bounds : {
       size : {
          width : 100,
          height : 200
       },
       position : {
          x : 300,
          y : 400
       }
    }
});

var nextState = state.setIn(['style', 'color', 'r'], 99);

state.bounds === nextState.bounds; //true
state.text === nextState.text; //true
state.style.font === state.style.font; //true
    // Конец
};

export default addECMAInfo;
export { javaScriptData };