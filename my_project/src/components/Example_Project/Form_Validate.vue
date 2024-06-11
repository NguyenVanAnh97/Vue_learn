<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim="formData.name" />
        <span v-if="!isNamevalid" class="error">Name is required</span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" />
        <span v-if="!isEmailvalid" class="error">Email is not valid</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formData.password" />
        <span v-if="!isPasswordvalid" class="error">Password must be at least 8 characters</span>
      </div>

      <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  name: '',
  email: '',
  password: ''
})

const isNamevalid = computed(() => {
  return formData.value.name.length > 0 && formData.value.name.trim() !== ''
})

const isEmailvalid = computed(() => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailPattern.test(formData.value.email)
})

const isPasswordvalid = computed(() => {
  return formData.value.password.length >= 8 && formData.value.password.trim() !== ''
})

const isFormValid = computed(() => {
  return isNamevalid.value && isEmailvalid.value && isPasswordvalid.value
})

const submitForm = () => {
  if (isFormValid.value) {
    console.log(formData.value)
  } else {
    console.log('Form is not valid')
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
