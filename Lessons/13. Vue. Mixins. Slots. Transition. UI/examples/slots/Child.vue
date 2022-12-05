<template>
    <div class="container">
        <button
            class="btn btn-danger"
            @click="$emit('save')"
        >
            <slot>Подтвердить</slot>
        </button>



        <!--        Именованные слоты-->
        <!--        <header>-->
        <!--            <slot name="header"></slot>-->
        <!--        </header>-->
        <!--        <main>-->
        <!--            <slot></slot>-->
        <!--        </main>-->
        <!--        <footer>-->
        <!--            <slot name="footer"></slot>-->
        <!--        </footer>-->




        <!--        Передача данных в слоты-->
        <!--        <button-->
        <!--            class="btn btn-danger"-->
        <!--            @click="$emit('save')"-->
        <!--        >-->
        <!--            <slot v-bind:user="user">-->
        <!--                {{ user.name }}-->
        <!--            </slot>-->
        <!--        </button>-->
    </div>
</template>

<script>
export default {
    name: "Child",
};
</script>