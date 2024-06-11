<template>
    <div>
        <h1>Overview page is here</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'

    const store = useStore()

    const count = ref(0);

    onMounted(() => {
        count.value = store.state.transactions
    })
</script>

<style lang="css" scoped>

</style>