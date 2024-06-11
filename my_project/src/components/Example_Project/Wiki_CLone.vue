<template>
  <div :class="{ 'dark-theme': isDarkTheme }" class="wiki-clone">
    <h1>Wiki CLone</h1>

    <form @submit.prevent="submitSearch">
      <input type="text" v-model="searchQuery" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <ul v-if="searchQueryResult.length" class="search-result">
      <li v-for="item in searchQueryResult" :key="item.pageid">
        <a :href="`https://en.wikipedia.org/?curid=${item.pageid}`" target="_blank">
          <h2>{{ item.title }}</h2>
            {{ `https://en.wikipedia.org/?curid=${item.pageid}` }}
        </a>

        <p>{{ item.link }}</p>

        <p v-html="item.snippet"></p>

        <hr />
      </li>
    </ul>

    <button @click="toggleTheme" class="toggle-theme-button">Toggle Theme</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchQueryResult = ref([])
const isLoading = ref(false)
const error = ref(null)
const isDarkTheme = ref(false)

const searchWiki = async (query) => {
  const encodeQuery = encodeURIComponent(query)
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${encodeQuery}`

  try {
    const res = await fetch(endpoint)
    const data = await res.json()
    isLoading.value = true
    if (data.query && data.query.search) {
      searchQueryResult.value = data.query.search
      error.value = null
      
    } else {
      searchQueryResult.value = []
      error.value = 'No result found'
    }
  } catch (err) {
    console.log(err)
    searchQueryResult.value = []
    error.value = 'An error occured. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const submitSearch = () => {
  if (searchQuery.value.trim() !== '') {
    searchWiki(searchQuery.value)
  } else {
    error.value = 'Please enter a search query'
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.wiki-clone {
  padding: 20px;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.dark-theme {
  background-color: #333;
  color: #fff;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type='text'] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button[type='submit'] {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-result {
    padding-left: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #4caf50;
  text-decoration: none;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-theme-button {
  background-color: #4caf50;
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>
