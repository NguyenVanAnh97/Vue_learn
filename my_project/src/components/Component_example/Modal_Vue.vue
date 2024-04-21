<template>
  <div>
    <div class="modal fade" >
      <div class="modal-dialog"></div>
      <div class="modal-content" :class="{ 'bg-purple': theme === 'example' }">
        <div class="modal-header">
          <h2>{{ title_header }}</h2>
        </div>
        <div class="modal-body">
           <slot />
        </div>
        <div class="modal-footer">
          <button @click="onCloseModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
defineProps({
  title_header: {
    type: String,
    required: true
  },
  content_body: {
    type: String,
    default: ""
  },
  theme: {
    type: String,
    default: "example",
    validator(val) {
      return ["example", "sale", "contact"].includes(val)
    }
  }
})

// Khai báo sự kiện mà component có thể phát ra
const emit = defineEmits(['cancel']);
let onCloseModal = () => {
  // Phát ra sự kiện 'cancel' bằng cách sử dụng biến emit
  emit('cancel')
}
</script>

<style lang="css" scoped>
.modal {
  display: block;
  overflow: hidden;
  outline: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, .2);
}

.fade {
  opacity: 1;
  transition: opacity .15s linear;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
  transform: translate(0, -25%);
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 400px;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: .3rem;
  outline: 0;
  margin: 0 auto;
  border: 2px solid #000;
}

.modal-content.bg-purple {
  background-color: #fff;
}

.modal-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
}

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}
</style>