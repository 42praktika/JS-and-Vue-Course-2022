<template>
    <div class="filter">
        <!--Начало-->

        <!--Конец-->
    </div>
</template>


<script>
import ItisSelect from './ItisSelect.vue';
import {
    EDUCATION_LEVEL_OPTIONS,
    EXPERIENCE_OPTIONS,
    SCHEDULE_OPTIONS,
} from '../constants';

export default {
    name: 'SearchFilter',
    components: { ItisSelect },
    data() {
        return {
            // Начало

            // Конец
            EDUCATION_LEVEL_OPTIONS,
            EXPERIENCE_OPTIONS,
            SCHEDULE_OPTIONS,
        };
    },
    // Начало

    // Конец
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