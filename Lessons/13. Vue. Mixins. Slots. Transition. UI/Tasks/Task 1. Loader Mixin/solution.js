const loaderMixin = {
    data: () => ({
        loaderElement: null,
    }),
    mounted() {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.textContent = 'Загрузка...';
        this.loaderElement = loader;
    },
    methods: {
        setLoading(isLoading) {
            if (isLoading) {
                this.$el.append(this.loaderElement);
            } else {
                this.loaderElement.remove();
            }
        },
    },
};

export default loaderMixin;
