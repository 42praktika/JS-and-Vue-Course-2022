<template>
    <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" v-if="current === index" class="carousel-item active">
        <img :src="image" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev"  @click="previous()">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="next()">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
    <!--Конец-->
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        // Массив картинок уже получен
        const images = this.$root.data;
        return {
            images,
        };
    },
    // Начало
  methods: {
    previous() {
      if (this.current === 0) {
        this.current = this.images.length - 1;
      } else this.current--;
    },
    next() {
      if (this.current < this.images.length - 1) {
        this.current++;
      } else this.current = 0;
    },
  },
    // Конец
};
</script>

<style>
.carousel {
    background: #f6f6f6;
    display: block;
    padding: 30px;
    margin: 40px;
    font-family: Verdana, Tahoma, sans-serif;
    border-radius: 10px;
    align-items: center;
    width: 1000px;
}

.carousel-item {
    min-height: 325px;
}

.carousel-item.active {
    display: flex;
}
</style>