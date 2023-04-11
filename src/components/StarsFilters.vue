<template>
    <div class="container">
        <h1>Количество звезд</h1>
        <div class="check_type">
            <div class="item_type">
                <input type="checkbox" id="1" class="custom-checkbox" @change="starsChangeCount">
                <label for="1">1 звезда</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="2" class="custom-checkbox" @change="starsChangeCount">
                <label for="2">2 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="3" class="custom-checkbox" @change="starsChangeCount">
                <label for="3">3 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="4" class="custom-checkbox" @change="starsChangeCount">
                <label for="4">4 звезды</label>
            </div>
            <div class="item_type">
                <input type="checkbox" id="5" class="custom-checkbox" @change="starsChangeCount">
                <label for="5">5 звезд</label>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "StarsFilters",
    methods: {
        ...mapActions({
            starsChangeCount: "starsChangeCount"
        })
    },
    computed: {
        ...mapState({
            starsCount: state => state.list.starsCount
        })
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