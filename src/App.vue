<template>
    <div id="app">
        <div class="container">
            <div class="item country_filters">
                <CountryFilters/>
            </div>
            <div class="item apartments_type_filters">
                <TypeOfApartment/>
            </div>
            <div class="item Stars_filters">
                <StarsFilters/>
            </div>
            <div class="item Reports_count_filters">
                <ReviewCountFilters/>
            </div>
            <div class="item Price_filters">
                <PriceFilters/>
            </div>
            <div class="item buttons_filters">
                <ButtonsSetAndClearFilter/>
            </div>
            <div class="Cards">
                <List/>
            </div>
        </div>
    </div>

</template>

<script>
import List from "@/components/List.vue";
import CountryFilters from "@/components/CountryFilters.vue";
import TypeOfApartment from "@/components/TypeOfApartment.vue";
import StarsFilters from "@/components/StarsFilters.vue";
import PriceFilters from "@/components/PriceFilters.vue";
import ButtonsSetAndClearFilter from "@/components/ButtonsSetAndClearFilter.vue";
import ReviewCountFilters from "@/components/ReviewCountFilters.vue";

export default {
    name: "App",
    components: {
        ReviewCountFilters,
        ButtonsSetAndClearFilter,
        PriceFilters, StarsFilters, TypeOfApartment, CountryFilters, List
    },
    data() {
        return {
            checkedCountries: [],
            inputValue: '',
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

* {
    font-family: 'PT Sans', sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    display: grid;
    grid-template-columns: 37.4% 0.9fr;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-template-areas:
    "Country Cards"
    "apartments_type Cards"
    "Stars Cards"
    "Reports_count Cards"
    "Price Cards"
    "filter_buttons Cards";
}

.custom-checkbox {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    margin-right: 10px;
    color: #00BB6D;
}

.Cards {
    grid-area: Cards;
    min-width: 835px;
    min-height: 167px;
    margin-bottom: 10px;
}

.country_filters {
    grid-area: Country;
}

.apartments_type_filters {
    grid-area: apartments_type;
}

.Stars_filters {
    grid-area: Stars;
}

.Reports_count_filters {
    grid-area: Reports_count;
}

.Price_filters {
    grid-area: Price;
}

.buttons_filters {
    grid-area: filter_buttons;
}

.item {
    border: 1px solid black;
    border-radius: 10px;
}

</style>