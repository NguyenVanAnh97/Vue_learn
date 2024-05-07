<template>
  <div>
    <h1>Transaction is here</h1>
    <div v-if="transaction.length">
      <div class="item" v-for="item in transaction" :key="item.id">
        <RouterLink :to="{ name: 'transaction-detail-route', params: { id: item.id } }">{{
          item.name
        }}</RouterLink>
        <div class="price">Price: {{ item.price }}</div>
      </div>
    </div>
    <div v-else>Loading Transaction</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const transaction = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/transactionss/')
    if (!response.ok) {
      throw new Error('Lỗi kìa 3')
    }
    const data = await response.json()
    transaction.value = data
  } catch (error) {
    console.error(error)
    // Xử lý lỗi theo nhu cầu của ứng dụng
    throw error;
  }
};

onMounted(fetchData)
</script>

<style scoped></style>
