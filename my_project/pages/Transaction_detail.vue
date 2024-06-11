<template>
  <div>
    <h1>Transactions details</h1>
    <div v-if="transaction">
      <h1>Id: {{ transactionId }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading {{ transactionId }}</div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex"

const store = useStore()

const transaction = computed(() => store.state.transaction)

const route = useRoute()
const transactionId = ref(route.params.id)
onMounted(() => {
  store.dispatch('fetchTransaction', { id: transactionId.value }) 
})
</script>
