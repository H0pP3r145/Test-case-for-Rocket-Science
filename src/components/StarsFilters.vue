<template>
    <div class="container">
        <h1>Количество звезд</h1>
        <div class="check_type">
            <div class="item_type">
                <input type="checkbox" id="1" class="custom-checkbox" @change="change_value">
                <label for="1">1 звезда</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="2" class="custom-checkbox" @change="change_value">
                <label for="2">2 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="3" class="custom-checkbox" @change="change_value">
                <label for="3">3 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="4" class="custom-checkbox" @change="change_value">
                <label for="4">4 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="5" class="custom-checkbox" @change="change_value">
                <label for="5">5 звезд</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StarsFilters",
    data() {
        return {
            starsCount: []
        }
    },
    methods: {
        change_value(event) {
            if (this.starsCount.includes(event.target.id)) {
                this.starsCount = this.starsCount.filter((n) => n !== event.target.id)
            } else {
                this.starsCount.push(event.target.id)
            }
            console.log(this.starsCount)
        }
    }
}
</script>

<style scoped>
.container {
    padding: 25px 30px 10px 30px;
    display: flex;
    flex-direction: column;
}

.check_type {
    display: flex;
    flex-direction: column;
}

.item_type {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}


</style>