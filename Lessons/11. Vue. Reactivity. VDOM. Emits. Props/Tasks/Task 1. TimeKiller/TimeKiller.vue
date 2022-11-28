<template>
    <div class="time-killer">
        <button
            type="button"
            class="btn btn-warning"
            @click="addTime"
        >
            Добавить время!
        </button>
        <TimeElement :times="times"
                     @delete="deleteTime"
        />
    </div>
</template>

<script>
import {v4 as uuid} from 'uuid';
import TimeElement from "./TimeElement.vue";

export default {
    name: 'TimeKiller',
    components: {TimeElement},
    data() {
        return {
            times: [],
        }
    },
    methods: {
        deleteTime(id) {
            this.times = this.times.filter(time => time.id !== id);
        },
        addTime() {
            this.times.push(
                {
                    text: String(new Date()),
                    id: uuid()
                }
            )
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