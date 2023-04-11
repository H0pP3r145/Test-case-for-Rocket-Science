<template>
    <div v-if="hotels.length > 0">
        <div class="cards_container" v-for="hotel in hotels" :key="hotel.id">
            <div class="one_card">
                <div class="left">
                    <div class="content">
                        <h1 style="margin-bottom: 5px">{{ hotel.name }}</h1>
                        <div class="about">
                            <star-rating
                                :rating="hotel.stars"
                                :read-only="true"
                                :star-size="14"
                                :padding="6"
                                :show-rating="false">
                            </star-rating>
                            <div class="about_item type">{{ hotel.type }}</div>
                            <div style="font-size: 10px; align-self: center; margin-right: 6px">●</div>
                            <div class="about_item reviews_amount">{{ hotel.reviews_amount }} отзывов</div>
                            <img src="@/assets/maps-and-flags.png" alt="map"
                                 style="width: 14px; height: 14px; align-self: center; margin-right: 6px">
                            <div class="about_item country">{{ hotel.country }}</div>
                        </div>
                    </div>

                    <div class="description">{{ hotel.description }}</div>
                </div>
                <div class="right">
                    <h1>{{ Math.round(hotel.min_price) }} Руб</h1>
                    <h4>Цена за 1 ночь</h4>
                    <button :class="{ 'occupy_btn': !isBooked(hotel.id), 'occupy_btn_active': isBooked(hotel.id) }"
                            @click="bookHotel(hotel.id)">{{ isBooked(hotel.id) ? 'Забронировано' : 'Забронировать' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>К сожалению, по Вашему запросу ничего не найдено :(</h1>
    </div>

</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: "Card",
    components: {StarRating},
    props: ['hotels'],
    data() {
        return {
            bookedHotels: [],
        }
    },
    methods: {
        bookHotel(id) {
            if (!this.isBooked(id)) {
                this.bookedHotels.push(id);
            } else {
                this.bookedHotels.splice(this.bookedHotels.indexOf(id), 1);
            }
        },
        isBooked(id) {
            return this.bookedHotels.includes(id);
        },
    },
}
</script>

<style scoped>


.one_card {
    display: grid;
    grid-template-columns: 1.6fr 0.6fr;
    min-height: 167px;
    gap: 0 0;
    grid-template-areas: "left right";
    border-radius: 10px;
    border: 1px solid teal;
    padding: 10px;
    margin-bottom: 10px;
}

.about {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.right {
    grid-area: right;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.about_item {
    margin-right: 10px;
}

.description {
    width: 560px;
    font-size: 16px;
}

.occupy_btn {
    width: 179px;
    height: 40px;
    background: #f0eefe;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    color: #6A53F5;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}

.occupy_btn:hover {
    background: #c9c4f5;
    transition: 200ms;
}

.occupy_btn_active {
    width: 179px;
    height: 40px;
    background: #e6f8f0;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    color: #00BB6D;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
</style>