

import { createApp } from 'vue'
/* import App from './App.vue' systax_vue3*/
/* import SystaxVue from './Systax_V3.vue' isModal, template*/
/*import Event_vue3 from './Event_vue3.vue' mouse_event*/
/* import Render_vue3 from './Render_vue.vue' render, teleport, slot, emit*/

//game pokemon 
//import Pokemon from './Pokemon_Temp.vue'
//import Quick_Form from './components/Form_example/Quick_form.vue'
//import "./assets/global.css"
import Apps from "./Apps.vue"

//use router
import myRoute from '../router'

createApp(Apps).use(myRoute).mount('#app')

