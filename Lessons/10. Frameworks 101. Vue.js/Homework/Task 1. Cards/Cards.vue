<template>
    <!--Начало-->
    <div class="card-container">
    <div class="card" v-for="card in cards">
        <img :src="card.src" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">
                {{card.head}}
            </h5>
            <h4 class="card-title">
                {{card.price}}
            </h4>
            <p class="card-text">
                {{card.description}}
            </p>
            <div class="card__buttons">
                <button class="btn btn-primary button-plus" @click="addCard(card.id)">
                    +
                </button>
                <button class="btn btn-primary button-minus" @click="removeCard(card.id)">
                    -
                </button>
                <div>{{card.number}} шт.</div>
            </div>
            <div class="card__alert alert alert-danger" v-if="card.number > card.max">
                Данного товара доступно только {{cards.max}} шт.
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
        addCard(id) {
            if(this.cards[id].number <= this.cards[id].max){
                this.cards[id].number += 1;
            }
        },

        removeCard(id) {
            if(this.cards[id].number > 0){
                this.cards[id].number--;
            }
        }
    }
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