<template>
    <!--Начало-->

    <!--Конец-->
</template>

<script>
export default {
    name: 'CardBlock',
};
</script>

<style>
.card-block {
    display: flex;
    justify-content: space-between;
    width: 400px;
    background-color: #ffffff;
    height: 170px;
    padding: 12px;
    margin-right: 20px;
    margin-bottom: 20px;
    transition: all 0.3s;
    cursor: pointer;
}

.card-block:hover {
    box-shadow: 4px 4px 8px 4px rgba(34, 60, 80, 0.2);
    transform: scale(1.04);
}

.card-block__image {
    width: 33%;
}

.card-block__info {
    width: 67%;
    margin-left: 10px;
}

.card-block img {
    width: 120px;
}
</style>