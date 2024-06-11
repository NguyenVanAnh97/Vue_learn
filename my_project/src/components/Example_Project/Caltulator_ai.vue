<template>
    <div class="container">
        <input type="text" v-model="display" class="display">
        <div class="row">
            <button @click="appendNumber('1')">1</button>
            <button @click="appendNumber('2')">2</button>
            <button @click="appendNumber('3')">3</button>
        </div>
        <div class="row">
            <button @click="appendNumber('4')">4</button>
            <button @click="appendNumber('5')">5</button>
            <button @click="appendNumber('6')">6</button>
        </div>
        <div class="row">
            <button @click="appendNumber('7')">7</button>
            <button @click="appendNumber('8')">8</button>
            <button @click="appendNumber('9')">9</button>
        </div>
        <div class="row">
            <button @click="appendNumber('0')">0</button>
            <button @click="appendNumber('.')">.</button>
            <button @click="appendNumber('+')">+</button>
        </div>
        <div class="row">
            <button @click="appendNumber('-')">-</button>
            <button @click="appendNumber('*')">*</button>
            <button @click="appendNumber('/')">/</button>
        </div>
        <div class="row-equal">
            <button @click="display = '0'">C</button>
            <button @click="calculate">=</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const display = ref("0");


    const appendNumber = (number) => {
        if (display.value === "0") {
            display.value = number;
            if (display.value === ".") {
                display.value = "0.";
            }
        }else {
            display.value += number;
        }
        
    }

    const calculate = () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .display {
        width: 100%;
        font-size: 2.5rem;
        text-align: right;
        padding: 10px;
        border: none;
        background-color: #333;
        color: #fff;
        margin-bottom: 10px;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        width: 100%;
    }

    .row > button {
        background-color: #555;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .row > button:hover {
        background-color: #777;
    }

    .row-equal {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        width: 100%;
        height: 50px;
    }
</style>