const loaderMixin = {
    methods: {
        setLoading(isLoading) {
            const loadersInDOM = document.querySelectorAll('.loader')
            if (isLoading) {
                if (loadersInDOM.length < 1) {
                    this.$el.insertAdjacentHTML("beforeend", '<div class="loader">Загрузка...</div>');
                }
            } else {
                if (loadersInDOM.length > 0) {
                    loadersInDOM[0].remove();
                }
            }
        },
    },
};

export default loaderMixin;
