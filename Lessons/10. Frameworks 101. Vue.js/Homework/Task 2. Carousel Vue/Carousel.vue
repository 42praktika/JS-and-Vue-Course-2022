<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images"
           v-if="activeImage === index"
           class="carousel-item active">
        <img :src="image" class="d-block w-100" alt="error">
      </div>
    </div>
    <button class="carousel-control-next" @click="nextImage">
      <span class="carousel-control-next-icon"></span>
    </button>

    <button class="carousel-control-prev"  @click="prevImage">
      <span class="carousel-control-prev-icon"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    // Массив картинок уже получен
    const images = this.$root.data;
    let activeImage = 0;
    return {
      images,
      activeImage,
    };
  },
  methods: {
    nextImage() {
      if (this.activeImage < this.images.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },
    prevImage() {
      if (this.activeImage === 0) {
        this.activeImage = this.images.length - 1;
      } else {
        this.activeImage--;
      }
    }
  }
}
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