<template>
    <div class="container">
        <h1>Тип</h1>
        <div class="check_type">
            <div class="item_type">
                <input type="checkbox" id="Апартаменты" class="custom-checkbox" @change="change_value">
                <label for="Аппартаменты">Апартаменты</label>
            </div>
            <div class="line"></div>
            <div class="item_type">
                <input type="checkbox" id="Отель" class="custom-checkbox" @change="change_value">
                <label for="Отель">Отель</label>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    name: "TypeOfApartment",
    data() {
        return {
            checkedType: ''
        }
    },
    methods: {
        change_value(event) {
            if (this.checkedType === event.target.id) {
                document.getElementById(event.target.id).checked = false;
                this.checkedType = '';

            } else {
                switch (event.target.id) {
                    case "Апартаменты":
                        document.getElementById("Отель").checked = false;
                        this.checkedType = event.target.id;
                        break;
                    case "Отель":
                        document.getElementById("Апартаменты").checked = false;
                        this.checkedType = event.target.id;
                        break;
                }
            }
            this.setTypeOfApartments(this.checkedType)
        },
        ...mapMutations({
            setTypeOfApartments: "setTypeOfApartments"
        })
    },
    computed: {
        ...mapState({
            typeOfApartments: state => state.list.typeOfApartments
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

.line {
    width: 90%;
    height: 1px;
    margin: 10px;
    border-top: 1px solid rgba(0, 0, 0, 30%);
}
</style>