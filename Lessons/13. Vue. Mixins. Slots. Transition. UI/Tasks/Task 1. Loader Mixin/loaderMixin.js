const loaderMixin = {
    // Начало (у меня где-то заруинилась сборка, и поэтому в текущем репозитории vue компоненты нельзя нормально отследить :'))
    methods: {
        setLoading(isLoading) {
            if (isLoading) {
                if (document.querySelector('.loader') === null) {
                    const loader = document.createElement('div');
                    loader.className = 'loader';
                    loader.innerHTML = 'Загрузка...';
                    this.$el.append(loader);
                }
            }
            else {
                const loaderEl = this.$el.querySelector('.loader');

                if (loaderEl != null) {
                    loaderEl.remove();
                }
            }
        }
    }
    // Конец
};

export default loaderMixin;
