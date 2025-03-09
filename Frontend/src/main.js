import { createApp } from 'vue';
import App from './App.vue';
import store from './store';  // Correctly import store
import router from './router';  // Import router
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App);

app.use(store);  // Use the store in the app
app.use(router);  // Use the router in the app

app.mount('#app'); // Mount the app to the #app div
