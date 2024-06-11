<template>
  <div class="progess-bar">
    <h1>Progess Step</h1>
    <div class="container">
      <div
        class="step"
        v-for="(step, index) in steps"
        :key="index"
        :class="{ active: index === currentStep }"
        @click="clickStep(index)"
      >
        {{ step }}
      </div>
    </div>

    <div class="control">
      <button @click="previousStep" :disabled="currentStep === 0">Previous</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = ref(['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'])

const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const clickStep = (index) => {
  currentStep.value = index
}
</script>

<style scoped>
.progess-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.step {
  width: 150px;
  height: 50px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  transition: 0.3s all;
  cursor: pointer;  
}

.container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 10px;
  overflow: hidden;
}

.step.active {
  background-color: #333;
}

.control {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  text-transform: uppercase;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
