const loaderMixin = {
    methods: {
        setLoading(state) {
            const container = document.querySelector('.container');
            const loader = document.createElement('div');
            loader.className = 'loader';
            loader.textContent = 'Загрузка...';
            if (state) {
                if (container.children.length === 2)
                container.append(loader);
            }
            else {
                if (container.children.length === 3) {
                    container.lastChild.remove();
                }
            }
        }
    }
};

export default loaderMixin;
