<template>
    <div class="screen">
        <h1>POKE MEMORIE</h1>
        <h3>Select mode to start game</h3>
        <div class="action">
            <button @click="onStart(16)">
                <span>4x4</span>
                <span>Easy</span>
            </button>
            <button @click="onStart(36)">
                <span>6x6</span>
                <span>Normal</span>
            </button>
            <button>
                <span @click="onStart(64)">8x8</span>
                <span>Hard</span>
            </button>
            <button>
                <span @click="onStart(100)">10x10</span>
                <span>Super hard</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['onStart']);
const onStart = (totalOfBlocks) => {
    // Phát ra sự kiện 'cancel' bằng cách sử dụng biến emit
    emit('onStart', {totalOfBlocks})
}
</script>

<style lang="css" scoped></style>