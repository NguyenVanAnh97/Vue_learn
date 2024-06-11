

import { createApp } from 'vue'
/* import App from './App.vue' systax_vue3*/
/* import SystaxVue from './Systax_V3.vue' isModal, template*/
/*import Event_vue3 from './Event_vue3.vue' mouse_event*/
/* import Render_vue3 from './Render_vue.vue' render, teleport, slot, emit*/

//game pokemon 
//import Pokemon from './Pokemon_Temp.vue'
//import Quick_Form from './components/Form_example/Quick_form.vue'
//import "./assets/global.css"
//import Apps from "./Apps_router.vue"
//import App_lifecycle from './components/Lifecycle_example/App_lifecycle.vue'
//import Apps_router from './Apps_router.vue'
import store from './store'
//import Lean_Vue from './LearnVue.vue'
//import MyComponent from './components/Example_Project/MyComponent.vue'
//import RandamQuote from './components/Example_Project/RandomQuoteGenetor.vue'
//import Calculator from './components/Example_Project/Caltulator_ai.vue'
//import Form_Validate from './components/Example_Project/Form_Validate.vue'
//import PassWord_Generate from './components/Example_Project/PassWordGenerate.vue'
//import ProgessStep from './components/Example_Project/ProgessStep.vue'
//import Dad_Joker from './components/Example_Project/DadJoker.vue'
//import vace_97 from './Football_97.vue'
//import GithubUser from './components/Example_Project/GithubUser_Search.vue'
import Wiki from './components/Example_Project/Wiki_CLone.vue'




//use router
import myRoute from '../router'

createApp(Wiki).use(myRoute).use(store).mount('#app')

