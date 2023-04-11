<template>
    <Card :hotels="getContentWithLimit"/>
    <paginate
            :page-count="totalPages"
            :click-handler="handlePageChange"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
            :container-class="'pagination'"
            :page-class="'waves-effect'"
            v-if="getContentWithLimit.length > 0"
    >
    </paginate>

</template>

<script>
import Card from "@/components/Card.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import Paginate from "vuejs-paginate-next";
import store from "../../store";

export default {
    components: {Card, Paginate},
    computed: {
        ...mapState({
            hotels: state => state.list.hotels,
            totalPages: state => state.list.totalPages,
            page: state => state.list.page
        }),
        ...mapGetters({
            getContentWithLimit: "getContentWithLimit"
        })
    },
    methods: {
        ...mapActions({
            fetchHotels: 'fetchHotels'
        }),
        ...mapMutations({
            setPage: 'setPage'
        }),
        handlePageChange(number_page) {
            store.commit("setPage", number_page)
            if(this.hotels.length === 0) {
                store.dispatch("fetchHotels")
            }
        },
    },
    mounted() {
        this.fetchHotels();
    },
    name: "List"
}
</script>

<style>
.pagination li:hover {
    cursor: pointer;
}

.pagination li {
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;
}

.pagination li a {
    color: #444;
    display: inline-block;
    font-size: 1.2rem;
    padding: 0 10px;
    line-height: 30px;
}

.pagination li.active a {
    color: #fff;
}

.pagination li.active {
    background-color: teal;
}

.pagination li.disabled a {
    cursor: pointer;
    color: #999;
}

.pagination li i {
    font-size: 2rem;
}

.pagination li.pages ul li {
    display: inline-block;
    float: none;
}

@media only screen and (max-width: 992px) {
    .pagination {
        width: 100%;
    }

    .pagination li.prev,
    .pagination li.next {
        width: 10%;
    }

    .pagination li.pages {
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
    }
}


</style>