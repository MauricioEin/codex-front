import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { icon } from './directives'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

import './assets/styles/main.scss'
import 'highlight.js/scss/lioshi.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(hljsVuePlugin)
app.directive('icon', icon)
app.mount('#app')
