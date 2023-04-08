<template>
    <div class="container_countries_filter">
        <h1 style="margin-bottom: 25px">Страна</h1>
        <div class="input-container">
            <my-input
                    :model-value="searchQuery"
                    @update:model-value="setSearchQuery"
                    placeholder="Поиск стран"
            />
            <div class="countries_list_container">
                <div v-if="searchCountry.length > 0">
                    <div class="list" v-for="country in searchCountry" :key="country">
                        <input :checked="checkedCountries.includes(country)" type="checkbox" class="custom-checkbox"
                               :id="country"
                               @change="check_country"/>
                        <label for="123" class="label-style">{{ country }}</label>
                    </div>
                </div>
                <div v-else>
                    К сожалению, по Вашему запросу ничего не найдено :(
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import MyInput from "@/components/UI/MyInput.vue";

export default {
    name: "CountryFilters",
    components: {MyInput},
    data() {
        return {
            inputStr: '',
            checkedCountries: [],
        }
    },
    methods: {
        ...mapMutations({
            filteredMovies: "filteredMovies",
            setSearchQuery: 'setSearchQuery',
        }),
        ...mapActions({
            getCountries: "getCountries",
        }),
        check_country(event) {
            if (this.checkedCountries.indexOf(event.target.id) >= 0) {
                this.checkedCountries = this.checkedCountries.filter((n) => {
                    return n !== event.target.id
                })
            } else {
                this.checkedCountries.push(event.target.id)
            }
        },
    },
    computed: {
        ...mapState({
            countriesList: state => state.list.countriesList,
            searchQuery: state => state.list.searchQuery
        }),
        ...mapGetters({
            searchCountry: 'searchCountry'
        }),
    },
    mounted() {
        this.getCountries()
    },
}
</script>

<style scoped>

.container_countries_filter {
    padding: 25px 30px 10px 30px
}

.countries_list_container {
    border-radius: 10px;
    height: 202px;
    border: 1px solid black;
    padding: 24px 0 0 20px;
    overflow: auto;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
}

.label-style {
    font-size: 16px;
}



div::-webkit-scrollbar {
    width: 5px; /* ширина полосы прокрутки */
}


div::-webkit-scrollbar-thumb {
    background: teal; /* цвет полосы прокрутки */
    border-radius: 10px; /* скругление углов полосы прокрутки */
}
</style>