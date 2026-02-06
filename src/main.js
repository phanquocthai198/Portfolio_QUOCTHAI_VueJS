 import { createApp } from 'vue'
 import App from './App.vue'
 import router from './router'
 import './styles/main.css'
import { useLanguage } from '@/composables/useLanguage'

const { initLanguage } = useLanguage()
initLanguage()
createApp(App).use(router).mount('#app')