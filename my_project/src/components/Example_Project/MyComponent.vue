<template>
  <div>
    <div class="todo-app">
      <div class="task-input">
        <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter your task" />
        <button @click="addTask">Add Task</button>
      </div>

      <ul class="task-list">
        <li v-for="(task, index) in task" :key="index">
          {{ task }}

          <button @click="removeTask(index)">Remove</button>

          <button @click="editTask(index)">Edit</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const task = ref([])

const addTask = () => {
  const trimmedTask = newTask.value.trim()
  if (trimmedTask) {
    task.value.push(trimmedTask)
    newTask.value = ''
  } else {
    alert('Please enter a task')
  }
}

const removeTask = (index) => {
  task.value.splice(index, 1)
}

const editTask = (index) => {
  const currenTask = task.value[index]
  const updateTask = prompt('Enter new task', currenTask)

  if (updateTask !== null && updateTask !== currenTask && updateTask.trim() !== '') {
    task.value[index] = updateTask.trim()
  }
}
</script>

<style scoped></style>
