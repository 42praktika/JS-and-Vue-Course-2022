const addListeners = (state) => {
    const widgetButtons = document.querySelectorAll('.btnWidget');
    const nextButtons = document.querySelectorAll('.nextButton');
    const exitButton = document.querySelectorAll(".exitButton");

    for (let i = 0; i < widgetButtons.length; i++) {
        widgetButtons[i].addEventListener('click', () => {
            state.widgets[i].style.display = "block";
            state.activeWidgetIndex = i;
        })
    };

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (state.activeWidgetIndex === 2) {
                state.activeWidgetIndex = 0;
            } else {
                state.activeWidgetIndex++;
            }
            state.widgets.forEach((widget) => {
                widget.style.display = "none";
            })
            state.widgets[state.activeWidgetIndex].style.display = "block";
        })
    });

    exitButton.forEach((button) => {
        button.addEventListener('click', () => {
            state.widgets[state.activeWidgetIndex].style.display = "none";
        });
    });
}
const state = {
    widgets: document.querySelectorAll('.widget'),
    activeWidgetIndex : 0,
};

addListeners(state);



