<template>
    <!--Начало-->
  <tbody>
  <div class="card-container" v-for="c of cards" >
<div class="card">
  <img :src="c.src"/>
  <div class="card-body">
    <h5 class="card-title">{{c.head}} </h5>
    <h4 class="card-title"> {{c.price}}</h4>
    <p class="card-text"> {{c.description}}</p>
    <div class="card__buttons">
      <button class="btn btn-primary button-plus" @click="increase(c.id)"> + </button>
      <button class="btn btn-primary button-minus" @click="decrease(c.id)"> - </button>
      <div > {{c.number}} шт. </div>
    </div>
  </div>
</div>
  </div>
  </tbody>
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

      increase(id){
        if (this.cards[id].number < this.cards[id].max) {
          return this.cards[id].innerHTML = this.cards[id].number++
        }
        if(this.cards[id].number >= this.cards[id].max) {
          let dom = document.querySelector('.card__buttons');
          return dom.innerHTML='<div> <div class="card__alert alert alert-danger">Данного товара доступно только "${this.cards[id].max}" шт. </div> </div>';

        }
      },
      decrease(id){
        while (this.cards[id].number >0){
          return this.cards[id].innerHTML = this.cards[id].number--;
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

