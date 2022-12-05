<template>
    <div class="tic-tac-toe">
        <!--Начало-->

        <!--Конец-->
    </div>
</template>

<script>
import Tic from './Icons/Tic.vue';
import Tac from './Icons/Tac.vue';

export default {
    name: 'TicTacToe',
    components: { Tic, Tac },
    // Начало

    // Конец
};
</script>

<style>
body {
    background: rgb(102, 213, 255);
    background: radial-gradient(circle, rgba(102, 213, 255, 0.9416141456582633) 0%, rgba(56, 140, 255, 1) 100%, rgba(0, 0, 0, 1) 100%);
}

.tic-tac-toe {
    margin: 30px 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.tic-tac-toe h4 {
    color: white;
    margin-bottom: 20px;
}

.tic-tac-toe__table {
    width: fit-content;
}

.tic-tac-toe__row {
    display: flex;
    align-items: center;
}

.tic-tac-toe__item {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.tic-tac-toe__item:not(:last-of-type) {
    border-right: 4px solid #ffffff;
}

.tic-tac-toe__row:not(:last-of-type) {
    border-bottom: 4px solid #ffffff;
}

.tic-tac-toe__item svg {
    transform: scale(3);
}

.tic-tac-toe__results {
    margin: 20px 0;
    color: white;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.tic-tac-toe__results h3 {
    text-align: center;
}

.tic-tac-toe__results > div {
    color: white;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.tic-tac-toe__results svg {
    margin-right: 10px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .35s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>