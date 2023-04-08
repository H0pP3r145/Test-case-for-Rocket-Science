<template>
    <div class="container">
        <h1>Количество отзывов (от)</h1>
        <my-input
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
                placeholder="Например, от 10"
        />
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
    name: "ReviewCountFilters",
    components: {MyInput}
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
</style>