<template>
    <!--Начало-->
    <div class="carousel">
        <div class="carousel-inner">
            <div
                v-for="(img, i) in images"
                :class="activeIndex === i ? 'carousel-item active' : 'carousel-item'"
            >
                <img
                    :src=img
                    class="d-block w-100"
                />
            </div>
        </div>
        <button class="carousel-control-prev" @click="goToPrev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="goToNext">
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
        let activeIndex = 0;
        return {
            images,
            activeIndex,
        };
    },
    // Начало
    methods: {
        goToPrev() {
            if (this.activeIndex - 1 < 0) {
                this.activeIndex = this.images.length - 1;
            } else {
                this.activeIndex -= 1;
            }
        },
        goToNext() {
            if (this.activeIndex + 1 > this.images.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex += 1;
            }
        }
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
