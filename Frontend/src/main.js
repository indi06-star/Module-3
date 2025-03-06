import { createApp } from 'vue';
import App from './App.vue';  // The main App component
import store from './store';
import router from './router';  // Import the router
import axios from 'axios';


// Create the Vue app and use the router
const app = createApp(App);

app.use(store);  // Use the store in the app
app.use(router);  // Use the router in the app

