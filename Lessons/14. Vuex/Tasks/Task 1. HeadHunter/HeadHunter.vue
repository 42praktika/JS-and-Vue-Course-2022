<template>
    <div class="head-hunter">
        <h2>Поиск вакансий</h2>
        {{ test }}
    </div>
</template>

<script>
import SearchFilter from './components/SearchFilter.vue';
import Vacancies from './components/Vacancies.vue';

export default {
    name: 'HeadHunter',
    components: { SearchFilter, Vacancies },
    computed: {
        test() {
            return this.$store.state.test
        }
    }
};
</script>

<style>
body {
    background: #f0f7ff;
}
.head-hunter {
    margin: 30px 80px;
}

.head-hunter__vacancies {
    display: flex;
}

.head-hunter__vacancies .vacancies {
    margin-right: 20px;
}
</style>