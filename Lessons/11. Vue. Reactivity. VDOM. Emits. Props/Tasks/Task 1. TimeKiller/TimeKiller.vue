<template>
    <div class="time-killer">
        <!--Начало-->
        <TimeElement
            class="times-container__item"
            :times-items="timesItems"
        />
        <button
            type="button"
            class="btn btn-warning"
            @click="onAddTime"
        >
            Добавить время!
        </button>

        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement";
export default {
    name: 'TimeKiller',
    components: {TimeElement},
    data () {
        return {
            timesItems: [
                { id:0, text:'Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)' },
            ],
            maxIndex: 0,

        };
    },
    methods: {
        onAddTime () {
          this.maxIndex += 1;
          this.timesItems.push({ id: this.maxIndex, text: 'Fri Oct 1 2049 16:06:28 GMT+0300 (Moscow Standard Time)' });
        }
    }

};
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}
</style>