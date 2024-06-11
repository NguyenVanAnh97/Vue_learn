<template>
  <div>
    <h1>Dad Jokes</h1>

    <button @click="fetchJoke">Get Joke</button>

    <p v-if="joke">{{ joke }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import axios from 'axios'

const joke = ref(null)

const fetchJoke = async () => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })

    joke.value = response.data.joke
} catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
