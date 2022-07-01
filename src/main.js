import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import vm from './vm.vue'
import './index.css'

createApp(App).mount('#app')
createApp(App2).mount('#demo')
createApp(vm).mount('#vm')