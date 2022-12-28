<template>
    <div class="vacancies">
        <h3>{{ blockType === 'all' ? 'Найденные' : 'Мои' }} вакансии</h3>
        <div
            class="vacancies__item"
            v-for="vacancy in vacancies"
            :key="vacancy.id"
        >
            <h4>{{ vacancy.name }}</h4>
            <div>
                <b>Организация:</b> {{ vacancy.employer.name }}
            </div>
            <div v-if="vacancy.address">
                <b>Город:</b> {{ vacancy.address.city }}
            </div>
            <div v-if="vacancy.salary">
                <b>Оплата труда:</b> {{ vacancy.salary.from }} руб.
            </div>
            <div v-if="vacancy.snippet">
                <b>Требования:</b> {{ vacancy.snippet.requirement }}
            </div>
            <a :href="vacancy.alternate_url">
                Посмотреть на hh.ru
            </a>
            <button
                class="btn btn-dark"
                @click="$emit('click', vacancy)"
            >
                {{ blockType === 'all' ? 'Добавить' : 'Удалить' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Vacancies",
    props: {
        vacancies: {
            type: Array,
            default: () => [],
        },
        blockType: {
            type: String,
            default: 'all',
        },
    },
};
</script>

<style>
.vacancies {
    margin-top: 20px;
}

.vacancies h3 {
    margin-bottom: 15px;
}

.vacancies__item {
    width: 500px;
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid #e7e7e7;
    border-radius: 6px;
    background: #ffffff;
}

.vacancies__item .btn {
    margin-top: 10px;
    display: block;
}
</style>