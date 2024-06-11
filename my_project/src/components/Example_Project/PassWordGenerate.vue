<template>
  <div>
    <h1>Generate Password</h1>

    <label for="length">Password Length</label>
    <input type="number" id="length" v-model="passWordLength" min="8" max="32" />
    <br />
    <label for="uppercase">Include Uppercase</label>
    <input type="checkbox" id="uppercase" v-model="includeUppercase" />
    <br />
    <label for="numbers">Include Numbers</label>
    <input type="checkbox" id="numbers" v-model="includeNumber" />
    <br />
    <label for="symbols">Include Symbols</label>
    <input type="checkbox" id="symbols" v-model="includeSysbol" />
    <br />
    <button @click="generatePassword">Generate</button>
    <br />
    <span>{{ generatedPassword }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const passWordLength = ref(12)
const includeUppercase = ref(true)
const includeNumber = ref(true)
const includeSysbol = ref(true)
const generatedPassword = ref('')

const generatePassword = () => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = includeUppercase.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
  const numbers = includeNumber.value ? '0123456789' : ''
  const symbols = includeSysbol.value ? '!@#$%^&*()_+[]{}|;,.<>?/~' : ''

  const allChar = lowerCase + upperCase + numbers + symbols
  let password = ''
  for (let i = 0; i < passWordLength.value; i++) {
    const index = Math.floor(Math.random() * allChar.length)
    password += allChar[index]
  }
  generatedPassword.value = password
}
</script>

<style scoped></style>
