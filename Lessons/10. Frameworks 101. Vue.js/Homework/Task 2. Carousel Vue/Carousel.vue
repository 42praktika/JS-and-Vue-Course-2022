<template>
    <!--Начало-->
    <div class="carousel">
        <div class="carousel-inner">
            <div>
                v-for="(image, index) in images"
                :class="['carousel-item', activeIndex === index && 'active']"
            
                <img
                    class="d-block w-100"
                    :src="image"
                />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            @click="onPrevClick"
        >
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button
            class="carousel-control-next"
            @click="onNextClick"
        >
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
        onPrevClick() {
            this.activeIndex = this.activeIndex - 1 < 0
                ? this.images.length - 1
                : this.activeIndex - 1;
        },
        onNextClick() {
            this.activeIndex = this.activeIndex + 1 >= this.images.length
                ? 0
                : this.activeIndex + 1;
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