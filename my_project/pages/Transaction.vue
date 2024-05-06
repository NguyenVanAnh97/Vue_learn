<template>
    <div>
        <h1>Transaction is here</h1>
        <div class="item" v-for="item in transaction" :key="item.id">
            <RouterLink :to="`/transaction/${item.id}`">{{ item.name }}</RouterLink>
            <div class="price">
                Price: {{ item.price }}
            </div>
        </div>
    </div>
</template>

<script setup>
const transaction = [{
    id: 1,
    name: "Test1",
    price: 456
}, {
    id: 2333,
    name: "Test2",
    price: 678,
}, {
    id: 3,
    name: "Test3",
    price: 890,
}]
</script>

<style scoped></style>