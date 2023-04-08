<template>
    <div class="container">
        <div class="input-container">
            <my-input class="my-input_style"
                      :model-value="searchQuery"
                      @update:model-value="setSearchQuery"
                      placeholder="от 0 рублей"/>
            <div class="line"></div>
            <my-input class="my-input_style" placeholder="До 100000 Руб"/>
        </div>
        <Slider v-model="value" :min="minValue" :max="maxValue" :merge="5" :showTooltip="'drag'"/>
    </div>
</template>

<script>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
import MyInput from "@/components/UI/MyInput.vue";

export default {
    name: "PriceFilters",
    components: {MyInput, Slider},
    data() {
        return {
            minValue: 0,
            maxValue: 100000,
            value: [0, 100000],
            minValueCustomers: 0,
            maxValueCustomers: 100000,
            searchQuery: ''
        }
    },
    computed: {
        setSearchQuery() {
            console.log(this.searchQuery)
        }

    },
    watch: {
        change_input() {
            console.log(this.minValueCustomers)
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