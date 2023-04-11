<template>
    <input :value="modelValue" @input="updateInput" class="input">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.input {
    padding: 0 0 0 25px;
    border-radius: 10px;
    height: 50px;
    margin-bottom: 25px;
    font-size: 16px;
}
</style>