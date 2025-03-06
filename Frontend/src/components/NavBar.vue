<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/" class="brand-name">StreamX</router-link>
    </div>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <router-link to="/movies">Movies</router-link>
      <li><router-link to="/coming-soon">Coming Soon</router-link></li>
      <li v-if="currentUser && !isAdmin"><router-link to="/my-list">My List</router-link></li>
      <li v-if="isAdmin"><router-link to="/adminDashboard">AdminDashboard</router-link></li>
    </ul>

    <div class="auth-buttons">
      <button v-if="!currentUser && !signupSuccess" class="login-btn" @click="openAuthModal('login')">Login</button>
      <button v-if="!currentUser && !signupSuccess" class="signup-btn" @click="openAuthModal('signup')">Sign Up</button>
      <button v-if="currentUser" class="logout-btn" @click="handleLogout">Logout</button>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser', 'isAdmin', 'signupSuccess']), // Add signupSuccess to getters
  },
  methods: {
    ...mapActions(['logout']),
    openAuthModal(type) {
      this.$emit('open-auth-modal', type);
    },
    handleLogout() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
}

/* StreamX Name */
.logo .brand-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
  text-decoration: none;
}

/* Navbar Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 40px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffcc00;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
}

.auth-buttons .login-btn,
.auth-buttons .signup-btn,
.auth-buttons .logout-btn {
  padding: 8px 16px;
  margin-left: 15px;
  border: none;
  background-color: #ffcc00;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.auth-buttons .login-btn:hover,
.auth-buttons .signup-btn:hover,
.auth-buttons .logout-btn:hover {
  background-color: #e67e22;
}

/* Mobile View - Make navbar links stack vertically */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .nav-links li {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .nav-links li:last-child {
    margin-bottom: 0;
  }

  .auth-buttons {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .auth-buttons .login-btn,
  .auth-buttons .signup-btn,
  .auth-buttons .logout-btn {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>