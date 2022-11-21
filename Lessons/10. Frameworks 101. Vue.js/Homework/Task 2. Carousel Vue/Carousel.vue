<template>
    <!--Начало-->
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item"
                 v-for="(image, index) in images"
                 :class="{'active': active === index}">
                <img :src="image" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" @click="prevImage">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="nextImage">
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
            active: 0,
        };
    },
    // Начало
    methods: {
        nextImage() {
            this.active = this.active + 1 >= this.images.length
                ? 0
                : this.active + 1;
        },
        prevImage() {
            this.active = this.active === 0
                ? this.images.length - 1
                : this.active - 1;
        },
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