<template>
  <p>Component cháu</p>
  <p v-for="(value, name) in props.user" :key="name">{{ name }}: {{ value }}<br /></p>
  <slot></slot>

  <h2>{{ nameK.name }}</h2>
  <h2>{{ nameK.age }}</h2>
  <h2>{{ nameK.address }}</h2>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  user: Object
})

const nameK = inject('userInfo')
</script>

<style scoped></style>
