<template>
    <div class="container">
        <h1>Цена, ₽</h1>
        <div class="input-container">
            <my-input type="number"
                      class="my-input_style"
                      placeholder="от 0 ₽"
                      :model-value="price[0]"
                      @update:model-value="updateMinPrice"
                      id="my_input_min"/>
            <div class="line"></div>
            <my-input
                    class="my-input_style"
                    :model-value="price[1]"
                    placeholder="До 100000 ₽"
                    @update:model-value="updateMaxPrice"
                    id="my_input_max"
                    type="number"/>
        </div>
        <Slider v-model="value" :min="minValue" :max="maxValue" :merge="1" :showTooltip="'drag'"
                @change="updatePrice"/>
    </div>
</template>

<script>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
import MyInput from "@/components/UI/MyInput.vue";
import {mapMutations, mapState} from "vuex";

export default {
    name: "PriceFilters",
    components: {MyInput, Slider},
    data() {
        return {
            minValue: 0,
            maxValue: 100000,
            value: [0, 100000],
            minPrice: '',
            maxPrice: ''
        }
    },
    methods: {
        ...mapMutations({
            updatePrice: "updatePrice",
            updateMinPrice: "updateMinPrice",
            updateMaxPrice: "updateMaxPrice"

        }),
    },
    computed: {
        ...mapState({
            price: state => state.list.price
        }),
    },
    watch: {}
}
</script>

<style scoped>
.container {
    padding: 25px 30px 10px 30px;
    display: flex;
    flex-direction: column;
}

.input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.line {
    width: 10px;
    height: 1px;
    border-top: 1px solid black;
}

.my-input_style {
    width: 148px;
    height: 50px;
    margin: 0;
    border: 1px solid #EAEAEA
}
</style>