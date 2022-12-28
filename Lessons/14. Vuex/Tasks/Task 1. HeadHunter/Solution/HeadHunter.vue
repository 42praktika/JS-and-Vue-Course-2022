<template>
    <div class="head-hunter">
        <h2>Поиск вакансий</h2>
        <SearchFilter/>
        <div class="head-hunter__vacancies">
            <Vacancies
                block-type="all"
                v-if="allVacancies.length > 0"
                :vacancies="allVacancies"
                @click="onAddVacancy"
            />
            <Vacancies
                block-type="my"
                v-if="myVacancies.length > 0"
                :vacancies="myVacancies"
                @click="onRemoveVacancy"
            />
        </div>
    </div>
</template>

<script>
import SearchFilter from './components/SearchFilter.vue';
import Vacancies from './components/Vacancies.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'HeadHunter',
    components: { SearchFilter, Vacancies },
    computed: {
        ...mapState([ 'allVacancies', 'myVacancies' ]),
    },
    methods: {
        ...mapActions([ 'addVacancy', 'removeVacancy' ]),
        onAddVacancy(vacancy) {
            this.addVacancy(vacancy);
        },
        onRemoveVacancy(vacancy) {
            this.removeVacancy(vacancy);
        },
    },
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