<template>
  <div class="login-container">
    <form @submit.prevent="loginMethod">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password_hashed"
          placeholder="Enter your password"
          required
        />
      </div>
      <div v-if="errorMessage" class="error-message">
        <p>{{ errorMessage }}</p>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  
  methods: {
    // Method to toggle the login form visibility (optional)
    change() {
      this.showLogin = !this.showLogin;
    },
    async loginMethod() {
      await this.$store.dispatch('login', this.login);
      await this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>
