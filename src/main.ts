import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import Select from '@/components/_shared/Select.vue'
import Button from '@/components/_shared/Button.vue'

createApp(App)
    .use(router)
    .use(createPinia())
    .component('Select', Select)
    .component('Button', Button)
    .mount('#app')

