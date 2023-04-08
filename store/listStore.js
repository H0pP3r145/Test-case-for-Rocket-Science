import axios from "axios";

export const listStore = {
    state: () => ({
        hotels: [],
        page: 1,
        limit: 3,
        totalPages: 0,
        isLoading: false,
        countriesList: [],
        searchQuery: '',
        typeOfApartments: '',
        starsCount: [],
        reviewCount: 0,
        minPrice: 0,
        maxPrice: 100500
    }), getters: {
        searchCountry(state) {
            return state.countriesList.filter(country => country.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    }, mutations: {
        setHotels(state, hotels) {
            state.hotels = hotels
        }, setLoading(state, boolean) {
            state.isLoading = boolean
        }, setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }, setPage(state, pageNumber) {
            state.page = pageNumber
        }, setCountriesList(state, countries) {
            state.countriesList = countries
        }, setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }, filteredMovies(state, inputStr) {
            if (inputStr) {
                state.countriesList = state.countriesList.filter(item => {
                    return item.includes(inputStr);
                });
            }
            console.log(1111)
        },

    }, actions: {
        async fetchHotels({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('http://localhost:4200/hotels', {
                    params: {
                        _page: state.page, _limit: state.limit
                    }
                });
                commit('setHotels', response.data)
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))

            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        }, async getCountries({commit}) {
            try {
                const response = await axios.get('http://localhost:4201/country');
                commit('setCountriesList', response.data)
            } catch (e) {
                console.log(e)
            }
        }
    }, namespace: true
}
