<template>
  <div>
    <h1>Transactions details</h1>
    <div v-if="transaction">
      <h1>Id: {{ transactionId }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading {{transactionId}}</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
 
const transaction = ref(null)
const route = useRoute()
const transactionId = ref(route.params.id)
onMounted(() => {
  fetch('http://localhost:3000/transactions/' + transactionId.value).then((response) => {
    response.json().then((data) => {
      transaction.value = data
    })
  })
})
</script>
