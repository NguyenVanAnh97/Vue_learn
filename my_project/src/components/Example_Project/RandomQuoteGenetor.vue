<template>
  <div>
    <h1>Random Quote</h1>
    <h3>{{ currentQuote.text }}</h3>
    <p>{{ currentQuote.author }}</p>
    <button @click="index = Math.floor(Math.random() * quotes.length)">Next Quote</button> 
  </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'
    const quotes = ref([
        {
         text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
         author: 'Nelson Mandela'
        },
        {
         text: 'The way to get started is to quit talking and begin doing.',
         author: 'Walt Disney'
        },
        {
         text: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
         author: 'Steve Jobs'
        },
        {
         text: 'If life were predictable it would cease to be life, and be without flavor.',
         author: 'Eleanor Roosevelt'
        }
    ])

    const index = ref(0)

    const currentQuote = computed(() => quotes.value[index.value])

    onMounted(() => {
        setInterval(() => {
            index.value = Math.floor(Math.random() * quotes.value.length)
        }, 3000)
    })
</script>

<style scoped></style>
