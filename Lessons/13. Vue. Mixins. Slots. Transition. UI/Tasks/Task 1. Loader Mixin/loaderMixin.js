const loaderMixin = {
    // Начало
    methods: {
        setLoading(status) {
            if (status === true) {

                let loader = document.createElement('div')
                loader.className = 'loader'
                loader.textContent = 'Загрузка...'
                this.$el.append(loader)
            } else {
                let loader = document.querySelector('.loader')
                loader.remove()
            }

        }
    }
    // Конец
};

export default loaderMixin;
