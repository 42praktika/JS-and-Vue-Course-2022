<template>
    <div>
        Provide Inject
    </div>
</template>

<script>
export default {
    name: 'ProvideInject',
    provide: {
        userName: 'Michael Scott',
    },


    // Получаем данные в дочернем компоненте
    inject: [ 'userName' ],

    // также можно указать дефолтное значение
    // inject: {
    //     userName: { default: 'Dwight Schrute' }
    // }
};
</script>