<template>
    <div class="tic-tac-toe">
        <h4>Играет: {{ currentPlayer }}</h4>
        <div class="tic-tac-toe__table">
            <div
                class="tic-tac-toe__row"
                v-for="rowNum in fieldSize"
                :key="rowNum"
            >
                <div
                    class="tic-tac-toe__item"
                    v-for="(cell, index) in field[rowNum - 1]"
                    :key="index"
                    @click="doTurn(rowNum - 1, index)"
                >
                    <Tic v-if="field[rowNum - 1][index] === 0"></Tic>
                    <Tac v-if="field[rowNum - 1][index] === 1"></Tac>
                </div>
            </div>
        </div>
        <div class="tic-tac-toe__results">
            <h3>Счет</h3>
            <div>
                <Tic></Tic>
                Игрок 1: {{ playerOnePoints }}
            </div>
            <div>
                <Tac></Tac>
                Игрок 2: {{ playerTwoPoints }}
            </div>
        </div>
        <button
            class="btn btn-light btn-lg"
            @click="resetField"
        >
            Начать раунд сначала
        </button>
    </div>
</template>

<script>
import createDoubleArray from './consts/functions';
import Tic from './Icons/Tic.vue';
import Tac from './Icons/Tac.vue';

import {mapState} from 'vuex'

export default {
    name: 'TicTacToe',
    components: {Tic, Tac},
    computed: {
        ...mapState({
            fieldSize: state => state.gameTableModules.fieldSize,
            currentPlayer: state => state.statisticsModules.players[state.statisticsModules.turn].name,
            playerOnePoints: state => state.statisticsModules.players["0"].points,
            playerTwoPoints: state => state.statisticsModules.players["1"].points,
            turn: state => state.statisticsModules.turn
        }),
        field() {
            return this.$store.state.gameTableModules.field;
        },
    },
    methods: {
        resetField() {
            this.$store.dispatch('gameTableModules/setFieldAction', createDoubleArray(this.fieldSize, -1));
        },
        doTurn(row, cell) {
            this.changeField(row, cell, this.turn);
            this.$forceUpdate();
            if (this.checkWin()) {
                alert(`Игрок ${this.turn + 1} одержал победу`);
                this.$store.state.statisticsModules.players[this.turn].points++;
                this.resetField();
                this.$store.state.statisticsModules.turn = 0;
            } else {
                if (this.$store.state.statisticsModules.turn === 0) {
                    this.$store.state.statisticsModules.turn = 1;
                } else {
                    this.$store.state.statisticsModules.turn = 0;
                }
            }
        },
        changeField(row, cell, turn) {
            this.$store.dispatch('gameTableModules/changeFieldAction', [row, cell, turn]);
        },
        checkWin() {
            let field = this.field;
            let win = false;
            let diagonalWin1 = true;
            let diagonalWin2 = true;
            for (let i = 0; i < this.fieldSize; i++) {
                let rowWin = true;
                let columnWin = true;
                for (let j = 1; j < this.fieldSize; j++) {
                    if (field[i][j] !== field[i][j - 1] || field[i][j] === -1) {
                        rowWin = false;
                    }
                    if (field[j][i] !== field[j - 1][i] || field[j][i] === -1) {
                        columnWin = false;
                    }
                }
                for (let k = 0; k < this.fieldSize; k++) {
                    if (i === k && field[i][k] !== this.turn) {
                        diagonalWin1 = false;
                    }
                    if (i === this.fieldSize - k - 1 && field[i][k] !== this.turn) {
                        diagonalWin2 = false;
                    }
                }
                win = rowWin || columnWin || win;
            }
            win = win || diagonalWin1 || diagonalWin2
            return win;
        }
    },
    mounted() {
        this.resetField();
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
