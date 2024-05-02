<template>
    <div>
        <h1>Congratulations</h1>
        <p>{{ Math.round(timer / 1000) }} seconds</p>
        <button @click="onStartAgain">Start Again</button>
    </div>
</template>

<script setup>
defineProps({
    timer: {
        type: Number,
        required: true
    }
})


const emit = defineEmits(['onStartAgain']);
  let onStartAgain = () => {
    // Phát ra sự kiện 'onStartAgain' bằng cách sử dụng biến emit
    emit('onStartAgain')
  }
</script>

<style lang="css" scoped></style>