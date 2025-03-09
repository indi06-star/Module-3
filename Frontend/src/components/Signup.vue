<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Sign Up to StreamX</h2>
      <form @submit.prevent="SignUp">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required placeholder="Enter your username" />
        
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required placeholder="Enter your email" />

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required placeholder="Enter your password" />

        <label for="phone_number">Phone Number</label>
        <input type="text" id="password" v-model="phone_number" required placeholder="Enter your phone number" />
        
        <button type="submit">Register</button>
      </form>
      <!-- <p class="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p> -->
    </div>
  </div>
</template>

<script setup>
import store from '@/store';
import { ref } from 'vue';



const email = ref('');
const password = ref('');
const phone_number = ref('');
const username = ref('');


const SignUp = () => {
  store.dispatch('SignUp', {email: email.value, password : password.value, phone_number : phone_number.value, username : username.value})

};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #11111100;
  color: white;
  margin-top: -140px !important;
}

.login-box {
  background-color: #222;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(255, 204, 0, 0.3);
}

h2 {
  color: #ffcc00;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ffcc00;
  border-radius: 5px;
  background-color: #333;
  color: white;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: #ffcc00;
  color: #111;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e6b800;
}

.signup-link {
  margin-top: 15px;
  font-size: 0.9rem;
}

.signup-link a {
  color: #ffcc00;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
