<template>
    <div class="filter">
        <div class="filter__block">
            <div>
                <b>Поиск по ключевому слову</b>
                <input
                    class="form-control"
                    v-model="filter.text"
                />
            </div>
            <div>
                <b>Уровень оплаты труда (от), руб.</b>
                <input
                    class="form-control"
                    v-model="filter.salary"
                />
            </div>
        </div>
        <div class="filter__block">
            <div>
                <b>Уровень образования</b>
                <ItisSelect
                    :options="EDUCATION_LEVEL_OPTIONS"
                    v-model="filter.education_level"
                />
            </div>
            <div>
                <b>Опыт работы</b>
                <ItisSelect
                    :options="EXPERIENCE_OPTIONS"
                    v-model="filter.experience"
                />
            </div>
            <div>
                <b>График труда</b>
                <ItisSelect
                    :options="SCHEDULE_OPTIONS"
                    v-model="filter.schedule"
                />
            </div>
        </div>
        <button
            class="btn btn-success"
            @click="onSearchVacancies"
        >
            Найти
        </button>
    </div>
</template>


<script>
import ItisSelect from './ItisSelect.vue';
import {
    EDUCATION_LEVEL_OPTIONS,
    EXPERIENCE_OPTIONS,
    SCHEDULE_OPTIONS,
} from '../constants';
import { mapActions } from 'vuex';

export default {
    name: 'SearchFilter',
    components: { ItisSelect },
    data() {
        return {
            filter: {
                text: '',
                education_level: '',
                experience: '',
                schedule: '',
                salary: '',
            },
            EDUCATION_LEVEL_OPTIONS,
            EXPERIENCE_OPTIONS,
            SCHEDULE_OPTIONS,
        };
    },
    methods: {
        ...mapActions([ 'searchVacancies' ]),
        onSearchVacancies() {
            this.searchVacancies(this.filter);
        },
    },
};
</script>

<style>
.filter {
    padding: 20px;
    background: #ffffff;
    width: fit-content;
    border-radius: 10px;
}

.filter__block {
    display: flex;
    margin-bottom: 15px;
}

.filter__block > div {
    margin-right: 14px;
}

.filter__block .form-control {
    margin-top: 10px;
    width: 307px;
}

.filter__block .form-select {
    margin-top: 10px;
    width: 200px;
}
</style>