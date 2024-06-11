<template>
  <GrampaComponent :user="props.users" />
  <form @submit.prevent="emitVace">
    <input type="text" v-model="name" />
    <input type="number" v-model="age" />
    <input type="email" v-model="email" />
    <button type="submit">Submit</button>
  </form>
  <p>{{ vacevip }}</p>
</template>

<script setup>
import GrampaComponent from './GrampaComponent.vue'
import { ref } from 'vue'

const name = ref('')
const age = ref(0)
const email = ref('')

//khai báo emit , tên sự kiện vace
const emit = defineEmits(['vace'])

//phát sự kiện 'vace' và kèm tho dữ liệu
const emitVace = () => {
  emit('vace', {
    name: name.value,
    age: age.value,
    email: email.value
  })
}

const props = defineProps({
  users: Object,
  vacevip: String,
  rpoak: String
})
</script>

<style scoped></style>
