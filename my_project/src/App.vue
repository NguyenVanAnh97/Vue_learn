<script setup>
import { ref, nextTick, reactive , computed } from 'vue'

const message = "Hello word"
const rawHtml = '<div><h1>Title</h1><span style="color: red">Đây là màu đỏ</span></div>'
const buttonId = 'button-id'
const buttonClass = 'btn btn-rounded'
const isButtonDisable = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
const number = 4
const listString = 'a,b,c,d,e,f'
const converToId = data => data.split(',').reverse().join('')

const attributeName = "href"
const url = 'https://vnexpress.net/the-thao'

const count = ref(2)
const increase = () => count.value++
const myObject = ref({
  id: 2,
  user: {
    age: 19
  },
  array: [1, 2, 3]
})



const change = async () => {
  myObject.value.id++
  myObject.value.user.age++
  myObject.value.array.push(3);
  console.log(document.getElementById("va").innerText);
  await nextTick()
  console.log(document.getElementById("va").innerText); 
}

//computed 
const playerObject = reactive({
  namePlayer: 'Ronaldo',
  skill: []
})

const addSkill = () => {
  playerObject.skill.push('Skill')
}

//const isSkillPlayer = () => playerObject.skill.length > 4 ? 'Super start' : 'Good Player' => hàm sẽ bị render lại mỗi khi một trong những state bị thay đổi
const isSkillPlayer = computed(() => {
  return playerObject.skill.length > 4 ? 'Super start' : 'Good Player' 
})

</script>



<template>
  <h1>Systax Vue_3</h1>
  <p>{{ message }}</p>
  <span v-html="rawHtml"></span>
  <button :id="buttonId" :class="buttonClass" :disabled="isButtonDisable">{{ isButtonDisable ? 'Disable' : 'Click here'
    }}</button>
  <button v-bind="objectOfAttrs">Click me</button>
  <p :id="converToId(listString)">Number: {{ number * 2 }}</p> 
  <p>Reverse string: {{ converToId(listString) }}</p>
  <a v-bind:[attributeName]="url">VnExpress</a>
  <br />
  <p>{{ count }}</p>
  <button @click="increase">Increase</button>
  <hr />
  <p id="va">Increase id object: {{ myObject.id }}</p>
  <p>Age: {{ myObject.user.age }}</p>
  <p>Array: {{ myObject.array }}</p>
  <button @click="change">Click to increase</button>

  <hr />
  <h2>Computed</h2>
  <p>Name player : {{ playerObject.namePlayer }}</p>
  <p>Siêu sao: {{ isSkillPlayer }}</p>
  <button @click="addSkill">Add Skill</button>
</template>
