import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
// 使用 provide 方法提供 app 实例
app.provide('app', app)
app.mount('#app')
