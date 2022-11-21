<template>
    <!--Начало-->
  <div class="card-container">
    <div class="card" v-for="card in cards" :key="card.id">
      <img :src="card.src" class="card-img-top">
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
        <button class="btn btn-primary button-plus" @click="plus(card.id)">+</button>
        <button class="btn btn-primary button-minus" @click="minus(card.id)">-</button>
        <div>
          {{ card.number }} шт.
        </div>
        <div v-if="card.max < card.number" class="card__alert alert alert-danger">
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
      plus(id) {
        if (this.cards[id].number <= this.cards[id].max) {
          this.cards[id].number++;
        }
      },
      minus(id) {
        if (this.cards[id].number > 0) {
          this.cards[id].number--;
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