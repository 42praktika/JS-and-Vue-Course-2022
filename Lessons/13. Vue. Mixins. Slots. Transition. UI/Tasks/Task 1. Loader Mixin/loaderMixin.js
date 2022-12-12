const loaderMixin = {
    // Начало
    methods: {
        setLoading(state) {
            if (state) {
                if (!document.querySelector('.loader')) {
                    const div = document.createElement('div');
                    div.classList.add("loader");
                    div.textContent = "Загрузка..."
                    document.querySelector('.container').append(div)
                }
            } else {
                const r = document.querySelector('.loader');
                document.querySelector('.container').removeChild(r)
            }
        }
    },
    // Конец
};

export default loaderMixin;
