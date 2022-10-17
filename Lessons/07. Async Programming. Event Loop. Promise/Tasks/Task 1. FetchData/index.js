const fetchData = () => {
    // Начало
    const text = "Ищем: ";
    const input = document.querySelector('.form-control');

    const showMessage = () => {
        if (input.value.length > 0) {
            alert(text + input.value);
        }
    }

    function  debounce(call, timeoutMs) {
        return function perform(...args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && this.lastCall - previousCall <= timeoutMs) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => call(...args), timeoutMs);
        }
    }

    const debounceDO = debounce(showMessage, 1000);

    input.addEventListener('input', debounceDO);
    // Конец
};

export default fetchData;