<template>
    <!--Начало-->
    <div class="carousel">
    <div class="carousel-inner">
        <div v-for="(img, i) in images" v-if="activeImg === i" class="carousel-item active">
            <img :src="img" class="d-block w-100">
        </div>
    </div>
    <button class="carousel-control-prev" @click="prevImg">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="nextImg">
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
            activeImg: 0,
        };
    },
    // Начало
    methods: {
        prevImg() {
            if (this.activeImg === 0) {
                this.activeImg = this.images.length - 1;
            }
            else {
                this.activeImg--;
            }
        },

        nextImg() {
            if (this.activeImg < this.images.length - 1) {
                this.activeImg++;
            }
        }
    }
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