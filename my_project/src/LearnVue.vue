<template>
  <ChildComponent :users="userInfo" @vace="handleVace" :vacevip="vacevipass" />
  <p v-if="activeSkill">{{ skill }}</p>
  <button @click="activeSkill = !activeSkill">Click</button>
  <GrampaComponent>
    <h1>Văn Anh ==></h1>
  </GrampaComponent>

  <p>{{ messeger }}</p>
  <input type="text" v-model="text" />

  <h3>{{ infoClub.name }}</h3>

  <button @click="changerInfoName">change Name Club</button>

  <h4 ref="ass"></h4>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch
} from 'vue'
import ChildComponent from './ChildComponent.vue'
import GrampaComponent from './GrampaComponent.vue'

const messeger = ref('Hello')

const vacevipass = 'vaceadasdasdas'

const infoClub = reactive({
  name: 'Real Madrid'
})

const changerInfoName = () => {
  if (infoClub.name === 'Real Madrid') {
    infoClub.name = 'Barcelona'
  } else {
    infoClub.name = 'Real Madrid'
  }
}

const ass = ref('ấdfadsf')

console.log(ass.value)

onMounted(() => {
  console.log('Mounted', ass.value)
  ass.value.focus()
})

watch(infoClub, (newValue) => {
  console.log('newValue: ', newValue.name)
})

const text = ref('')

watch(text, (newValue) => {
  messeger.value = newValue
})

const userInfo = reactive({
  name: 'Ronaldo',
  age: 23,
  address: 'Ha Noi',
  job: 'Developer'
})
const activeSkill = ref(true)
const skill = ref(['Vue', 'Javascript', 'HTML', 'CSS'])

provide('userInfo', userInfo)

onUnmounted(() => {
  console.log(' Unmounted')
})

onBeforeUnmount(() => {
  console.log('Before Update')
})

onMounted(() => {
  console.log('Mounted')
})

onBeforeMount(() => {
  console.log('Before Mount')
})

onUpdated(() => {
  console.log('Update')
})

onBeforeUpdate(() => {
  console.log('Before Update')
})

const handleVace = (payload) => {
  console.log(
    'name: ' +
      payload.name.split('').reverse().join('').toUpperCase() +
      '' +
      ' age: ' +
      payload.age +
      ' email: ' +
      payload.email
  )
}
</script>

<style scoped></style>
