const loaderMixin = {
    // Начало
    methods: {
        setLoading(isLoading) {
            if (isLoading) {
                if (document.querySelector('.loader') === null) {
                    const loader = document.createElement('div');
                    loader.className = 'loader';
                    loader.textContent = 'Загрузка...';
                    this.$el.append(loader);
                }
            } else {
                const elem = this.$el.querySelector('.loader');
                if (elem != null) {
                    elem.remove();
                }
            }
        },
    },
    // Конец
};

export default loaderMixin;
