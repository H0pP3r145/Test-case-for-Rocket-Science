import axios from "axios";
import typeOfApartment from "@/components/TypeOfApartment.vue";

export const listStore = {
    state: () => ({
        hotels: [],
        page: 1,
        limit: 3,
        totalPages: 0,
        isLoading: false,
        countriesList: [],
        checkedCountries: [],
        searchQuery: '',
        typeOfApartments: '',
        starsCount: [],
        reviewCount: 0,
        price: [0, 100000],
        filtersWereApplied: false
    }), getters: {
        searchCountry(state) {
            return state.countriesList.filter(country => country.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }, getContentWithLimit(state) {
            console.log(state.hotels.slice(state.limit * state.page - state.limit, state.limit * state.page))
            return state.hotels.slice(state.limit * state.page - state.limit, state.limit * state.page)
        }
    }, mutations: {
        setHotels(state, hotels) {
            state.hotels = hotels
        }, setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }, setPage(state, pageNumber) {
            state.page = pageNumber
        }, setCountriesList(state, countries) {
            state.countriesList = countries
        }, setCountryCheckedList(state, newList) {
            state.checkedCountries = newList
        }, setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }, filteredCountriesList(state, inputStr) {
            if (inputStr) {
                state.countriesList = state.countriesList.filter(item => {
                    return item.includes(inputStr);
                });
            }
        }, setStarsCount(state, starsCount) {
            state.starsCount = starsCount
        }, pushStarsCount(state, newElement) {
            state.starsCount.push(newElement)
            console.log(state.starsCount)
        }, setTypeOfApartments(state, value) {
            state.typeOfApartments = value
        }, updatePrice(state, newPrice) {
            console.log(state.price)
            state.price = newPrice
        }, updateMinPrice(state, newPrice) {
            if (newPrice <= state.price[1] || state.price[1] === undefined) {
                state.price[0] = Number(newPrice)
                console.log(state.price)

            } else {
                alert("Минимальная цена не может быть больше максимальной!")
            }
        }, updateMaxPrice(state, newPrice) {
            if (newPrice >= state.price[0] || state.price[0] === undefined) {
                state.price[1] = Number(newPrice)
                console.log(state.price)

            } else {
                alert("Максимальная цена не может быть меньше минимальной!")
            }
        }, setReviewCount(state, reviewCount) {
            state.reviewCount = reviewCount
        }, defaultStates() {
            location.reload()
        }, setFiltersWereApplied(state, boolean) {
            state.filtersWereApplied = boolean;
        }
    }, actions: {
        async fetchHotels({commit}) {
            try {
                const response = await axios.get('http://localhost:4200/hotels');
                commit('setHotels', response.data)
                commit('setTotalPages', Math.ceil(response.data.length / 3))
            } catch (e) {
                console.log(e)
            }
        }, async getCountries({commit}) {
            try {
                const response = await axios.get('http://localhost:4201/country');
                commit('setCountriesList', response.data)
            } catch (e) {
                console.log(e)
            }
        }, async starsChangeCount({state, commit}, event) {
            if (state.starsCount.includes(event.target.id)) {
                commit("setStarsCount", state.starsCount.filter((n) => n !== event.target.id))
            } else {
                commit("pushStarsCount", event.target.id)
            }
        }, async filteredHotelsList({state, commit}) {
            try {
                const response = await axios.get('http://localhost:4200/hotels');
                commit("setHotels", response.data)
            } catch (e) {
                console.log(e)
            }
            commit("setHotels", state.hotels.filter(result => {
                if (state.checkedCountries.length > 0) {
                    return state.checkedCountries.includes(result.country)
                } else {
                    return result
                }
            })
                .filter(result => {
                    if (state.typeOfApartments.length > 0) {
                        return state.typeOfApartments.includes(result.type)
                    } else {
                        return result
                    }
                })
                .filter(result => {
                    if (state.starsCount.length > 0) {
                        return state.starsCount.includes(String(result.stars))
                    } else {
                        return result
                    }
                })
                .filter(result => {
                    if (state.reviewCount > 0) {
                        return state.reviewCount <= result.reviews_amount
                    } else {
                        return result
                    }
                })
                .filter(result => {
                    return (result.min_price >= Math.floor(state.price[0]) && result.min_price <= Math.floor(state.price[1] + 1))
                }))
            commit("setTotalPages", Math.ceil(state.hotels.length / 3))
            commit("setFiltersWereApplied", true)
        }
    }, namespace: true
}
