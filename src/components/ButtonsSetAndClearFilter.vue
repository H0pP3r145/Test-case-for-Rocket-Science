<template>
    <div class="container">
        <button class="button_type apply_button" @click="filteredHotelsList">Применить</button>
        <button class="button_type clear_button" @click="defaultStates">Очистить список</button>
    </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
    name: "ButtonsSetAndClearFilter",
    methods: {
        ...mapActions({
            filteredHotelsList: "filteredHotelsList",
            fetchHotels: "fetchHotels"
        }),
    }, computed: {
        ...mapMutations({
            defaultStates: "defaultStates"
        }),
    }
}
</script>

<style scoped>
.container {
    padding: 25px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button_type {
    width: 324px;
    height: 56px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bolder;
    border: 1px solid #EAEAEA;
}

.button_type:hover {
    cursor: pointer;
    transition: 100ms;
    border: 1px solid rgba(0, 0, 0, 30%);
}

.apply_button {
    background: #6A53F5;

}

.clear_button {
    background: #ffffff;
}
</style>