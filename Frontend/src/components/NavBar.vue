<template>
  <nav class="navbar">
    <!-- StreamX Name -->
    <div class="logo">
      <router-link to="/" class="brand-name">StreamX</router-link>
    </div>

    <!-- Navigation Links -->
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/movies">Movies</router-link></li>
      <li><router-link to="/coming-soon">Coming Soon</router-link></li>
      <li><router-link to="/my-list">My List</router-link></li>
      <li><router-link to="/admindashboard">AdminDashboard</router-link></li>
    </ul>

    <!-- Authentication Buttons -->
    <div class="auth-buttons">
      <button class="login-btn" @click="openAuthModal('login')">Login</button>
      <button class="signup-btn" @click="openAuthModal('signup')">Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openAuthModal(type) {
      this.$emit("open-auth-modal", type); // Emit event to parent component (App.vue)
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
  background-color:black; /* Dark black background */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif; /* Standard font */
}

/* StreamX Name */
.logo .brand-name {
  font-size: 24px;
  font-weight: bold; /* Standard bold text */
  color: #ffcc00; /* Bright yellow color */
  text-decoration: none;
}

/* Navbar Links */
.nav-links {
  list-style: none; /* Removes the default list bullets */
  display: flex;
  gap: 20px; /* Adds space between each list item */
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 40px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem; /* Normal font size */
  font-weight: bold; /* Standard bold text */
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffcc00; /* Golden color for hover */
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
}

/* ✅ Updated Button Styles - Smaller & Less Rounded */
.auth-buttons .login-btn,
.auth-buttons .signup-btn {
  padding: 8px 16px; /* Smaller size */
  margin-left: 15px;
  border: none;
  background-color: #ffcc00;
  color: white;
  font-size: 12px; /* Slightly smaller text */
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px; /* Slightly rounded for a square look */
}

.auth-buttons .login-btn:hover,
.auth-buttons .signup-btn:hover {
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
  .auth-buttons .signup-btn {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>
