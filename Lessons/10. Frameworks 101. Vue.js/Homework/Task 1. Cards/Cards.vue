<template>
    <!--Начало-->
    <div class="card-container">
        <div
            class="card"
            v-for="(card, index) in cards"
            :key="card.id"
        >
            <img
                class="card img"
                :src="card.src"
            >
            <div class="card-body">
                <h5 class="card-title">
                    {{ card.head }}
                </h5>
                <h4 class="card-title">
                    {{ card.price }}
                </h4>
                <p class="card-text">
                    {{ card.description }}
                </p>
                <div class="card__buttons">
                    <button
                        class="btn btn-primary button-plus"
                        @click="onItemsUp(index)"
                    >
                        +
                    </button>
                    <button
                        class="btn btn-primary button-minus"
                        @click="onItemsDown(index)"
                    >
                        -
                    </button>
                    <div>{{ card.number }} шт.</div>
                </div>
                <div
                    v-if="card.number > card.max"
                    class="card__alert"
                >
                    Данного товара доступно только {{ card.max }} шт.
                </div>
            </div>
        </div>
    </div>
    <!--Конец-->
</template>

<script>
export default {
    name: 'Cards',
    data() {
        // Массив данных для карточек товаров уже получен
        const cards = this.$root.data;
        return {
            cards,
        };
    },
    // Начало
    methods: {
        onItemsUp(index) {
            this.cards[index].number += 1;
        },
        onItemsDown(index) {
            const currentNumber = this.cards[index].number;
            if (Boolean(currentNumber)) {
                this.cards[index].number -= 1;
            }
        },
    },
    // Конец
};
</script>

<style>
.card-container {
    display: flex;
    margin: 40px;
    padding: 20px;
    background: aliceblue;
    width: 1010px;
}
.card {
    width: 300px;
    margin-right: 15px;
}
.card img {
    margin-top: 15px;
}
.card__buttons {
    display: flex;
    align-items: center;
}
.card__buttons button {
    width: 50px;
    margin-right: 20px;
}
.card__buttons div {
    font-size: 20px;
}
.card__alert {
    margin-top: 10px;
}
</style>