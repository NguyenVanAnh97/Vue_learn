

import { createApp } from 'vue'
/* import App from './App.vue' systax_vue3*/
/* import SystaxVue from './Systax_V3.vue' isModal, template*/
/*import Event_vue3 from './Event_vue3.vue' mouse_event*/
import Render_vue3 from './Render_vue.vue'

/* import boostrap */
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist /bootstrap-vue.css' 

createApp(Render_vue3).use(BootstrapVue).mount('#app')

