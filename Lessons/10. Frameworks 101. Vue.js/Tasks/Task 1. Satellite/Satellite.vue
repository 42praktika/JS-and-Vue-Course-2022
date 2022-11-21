<template>
    <div class="satellite">
        <div class="satellite__radius">
            <span>Радиус орбиты спутника:</span>
            <input type="text" class="form-control" v-model="radius">>
            <span>км</span>

        </div>
        <div class="satellite__speed">
            <h3>Требуемая скорость спутника:</h3>
          <div>
            {{ speed }} м/c
          </div>
            <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Satellite',
    data() {
      return {
        radius: '',
        massOfEarth: 6 * Math.pow(10, 24),
        gravitationalConstant: 6.67 * Math.pow(10, -11)
      }
    },
    computed: {
      speed() {
        return Math.round(Math.sqrt(this.massOfEarth / (this.radius * 1000) * this.gravitationalConstant));
      }
    }
};
</script>

<style>
.satellite {
    display: flex;
    align-items: center;
    margin: 40px;
    padding: 20px;
    background: aliceblue;
    width: 1010px;
}

.satellite > div {
    width: 50%;
}

.satellite__radius {
    display: flex;
    align-items: center;
}

.satellite__radius input {
    width: 200px;
    margin: 0 15px;
}

.satellite__radius > span {
    font-size: 20px;
}

.satellite__speed {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.satellite__speed > div {
    font-size: 24px;
    margin: 15px 0;
}

.satellite__speed > img {
    width: 400px;
}
</style>