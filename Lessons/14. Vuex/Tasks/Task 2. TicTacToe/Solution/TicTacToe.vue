<template>
    <div class="tic-tac-toe">
        <h4>
            Играет: {{ players[activePlayerIndex].name }}
        </h4>
        <div class="tic-tac-toe__table">
            <div
                class="tic-tac-toe__row"
                v-for="y in fieldSize"
            >
                <div
                    class="tic-tac-toe__item"
                    v-for="x in fieldSize"
                    @click="onClickHandler(x - 1 , y - 1)"
                >
                    <transition name="fade">
                        <component :is="getComponentName(x - 1, y - 1)"/>
                    </transition>
                </div>
            </div>
        </div>
        <div class="tic-tac-toe__results">
            <h3>Счет</h3>
            <div v-for="(player, index) in players">
                <component :is="player.gameElement"/>
                {{ player.name }}: {{ player.points }}
            </div>
        </div>
        <button
            class="btn btn-light btn-lg"
            @click="setClearGame"
        >
            Начать раунд сначала
        </button>
    </div>
</template>

<script>
import Tic from './Icons/Tic.vue';
import Tac from './Icons/Tac.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
    name: 'TicTacToe',
    components: { Tic, Tac },
    computed: {
        ...mapState('gameTable', [ 'gameTable', 'fieldSize' ]),
        ...mapState('statistics', [ 'players', 'activePlayerIndex' ]),
        ...mapGetters('gameTable', [ 'getIsGameCompleted' ]),
        ...mapGetters('statistics', [ 'getCurrentPlayer' ]),
    },
    mounted() {
        this.setClearGame();
    },
    methods: {
        ...mapActions('gameTable', [ 'setClearGame', 'updateTableAfterClick' ]),
        ...mapActions('statistics', [ 'updatePoints', 'changeActivePlayerIndex' ]),
        getComponentName(x, y) {
            return this.gameTable.length === 0 ? null : this.gameTable[y][x];
        },
        onClickHandler(x, y) {
            const currentPlayer = this.getCurrentPlayer;
            const currentElement = this.gameTable[y][x];
            if (!currentElement) {
                this.updateTableAfterClick({
                    x, y, playerElement: currentPlayer.gameElement,
                });
                this.changeActivePlayerIndex();
            }
            if (this.getIsGameCompleted) {
                setTimeout(() => {
                    alert(`${currentPlayer.name} одержал победу!`);
                    this.updatePoints();
                    this.setClearGame();
                }, 50);
            }
        },
    },
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