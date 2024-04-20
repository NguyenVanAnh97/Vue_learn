<template>
    <div class="section_systax">
        <h1>{{ isHello ? message : error }} - {{ count }}</h1>
        <button @click="increaseCount">Click me</button>
        <p>{{ reseverString }}</p>
        <p>{{ myArr }}</p>
    </div>
    <div class="modal" v-if="isModal">
        <h1>Model content</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const message = "văn anh đẹp trai"
const error = "văn anh bình thường"
const count = ref(0) 
const isHello = true
let isModal = true;
const increaseCount = () => {
    count.value++
    let randomNumber = Math.floor(Math.random() * 10)
    myArr.value.push(randomNumber)
    isModal = !isModal
}
const myString = ref("văn anh đẹp trai");
const reseverString = myString.value.split(" ").reverse().join(" ").toUpperCase(); 
const myArr = ref([]);


</script>

<style lang="css" scoped>
.section_systax {
    background: rgb(99, 66, 66);
    color: #fff;
    padding: 10px 20px 30px;
    border-radius: 20px;
}
</style>
