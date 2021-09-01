import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router";
import store from "./store/index";

import request from "./utils/request";
import storage from "./utils/storage";
import api from "./api";

let app=createApp(App);

console.log(import.meta.env)

app.config.globalProperties.$request=request;
app.config.globalProperties.$storage=storage;
app.config.globalProperties.$api=api;

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
