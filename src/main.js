import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { icon } from './directives'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.directive('icon', icon)
app.mount('#app')
