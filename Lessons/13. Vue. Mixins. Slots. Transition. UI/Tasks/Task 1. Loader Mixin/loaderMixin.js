const loaderMixin = {
    methods: {
        setLoading(isLoaded) {
            if (isLoaded) {
                if (!document.querySelector('.loader')) {
                    const divLoaderElement = document.createElement('div')
                    divLoaderElement.className = 'loader';
                    divLoaderElement.textContent = 'Загрузка...';
                    this.$el.append(divLoaderElement)
                }
            }
            else {
                const loaderElement = this.$el.querySelector('.loader');
                if (loaderElement != null) {
                    loaderElement.remove();
                }
            }
        }
    }
};

export default loaderMixin;
