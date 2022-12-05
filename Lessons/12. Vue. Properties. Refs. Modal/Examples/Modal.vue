<template>
    <div class="modal-container">
        <Modal
            name="greeting"
            width="500px"
            height="500px"
        >
            <div class="greeting__header">
                Заголовок модального окна
            </div>
            <div class="greeting__text">
                {{ modalText }}
            </div>
            <button
                class="btn btn-danger btn-lg"
                @click="hideModal"
            >
                Закрыть
            </button>
        </Modal>
        <button
            class="btn btn-warning btn-lg"
            @click="showModal"
        >
            Показать модальное окно
        </button>
    </div>
</template>

<script>
import Vue from 'vue';
import Modal from 'vue-js-modal';

Vue.use(Modal);

export default {
    name: 'ModalContainer',
    data() {
        return {
            modalText: 'Закрой меня, пожалуйста',
        };
    },
    methods: {
        showModal() {
            // После добавления зависимости Modal в компонент в данном экземпляре
            // становится доступен элемент $modal. К нему мы и обращаемся
            // для отображения модального окна
            this.$modal.show('greeting');
        },
        hideModal() {
            this.$modal.hide('greeting');
        },
    },
};
</script>

<style>
.modal-container {
    margin: 50px;
}

.v--modal {
    padding: 20px;
}

.greeting__header {
    border-bottom: 1px solid #bdbdbd;
    font-size: 20px;
    margin-bottom: 15px;
}

.greeting__text {
    font-size: 18px;
    margin-bottom: 30px;
}
</style>