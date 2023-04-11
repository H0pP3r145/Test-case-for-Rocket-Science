<template>
    <div class="container">
        <h1>Количество отзывов (от)</h1>
        <my-input
                type="number"
                @update:model-value="setReviewCount"
                placeholder="Например, от 10"
        />
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import {mapMutations} from "vuex";

export default {
    name: "ReviewCountFilters",
    components: {MyInput},
    methods: {
        ...mapMutations({
            setReviewCount: "setReviewCount"
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
</style>