<template>
  <nav class="navbar">
    <!-- StreamX Logo -->
    <div class="logo">
      <router-link to="/" class="brand-name">StreamX</router-link>
    </div>

    <!-- ✅ Hamburger Menu Button -->
    <div class="menu-toggle" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- ✅ Navigation Links -->
    <ul class="nav-links" :class="{ active: menuOpen }">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/movies">Movies</router-link></li>
      <li><router-link to="/my-list">My List</router-link></li>
      <li><router-link to="/admin-dashboard" v-if="admintester">Admin Dashboard</router-link></li>
    </ul>

    <!-- ✅ Authentication Buttons -->
    <div class="auth-buttons" :class="{ active: menuOpen }" v-if="!user">
      <button class="login-btn" @click="openAuthModal('login')" >Login</button>
      <button class="signup-btn" @click="openAuthModal('signup')">Sign Up</button>
    </div>
    
    <div class="auth-buttons" :class="{ active: menuOpen }" v-else>
      <h2 style="color: white;">Hi... <span>{{  user.user[0].username }}</span></h2>
      <button class="signup-btn" @click="logout">Log Out</button>
    </div>


  </nav>
</template>

<script>
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export default {
  data() {
    return {
      menuOpen: false, // Track menu state
      user: cookies.get('legitUser')
    };
  },
  computed : {
    admintester(){
      if(cookies.get('legitUser')?.user[0].user_role == 'admin'){
        return true
      } else {
        console.log('oops')
        return false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openAuthModal(type) {
      this.$emit("open-auth-modal", type);
    },
    logout(){
      cookies.remove('legitUser')
      location.reload()
    }
  },
};
</script>

<style scoped>
/* ✅ Navbar Styles */
/* ✅ Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: black;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
}

/* ✅ StreamX Name */
.logo .brand-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
  text-decoration: none;
}

/* ✅ Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 20px;
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

/* ✅ Auth Buttons */
.auth-buttons {
  display: flex;
}

.auth-buttons .login-btn,
.auth-buttons .signup-btn {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  background-color: #ffcc00;
  color: black;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.auth-buttons .login-btn:hover,
.auth-buttons .signup-btn:hover {
  background-color: #e67e22;
}

/* ✅ Hamburger Menu for Mobile */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: all 0.3s ease;
}

/* ✅ Mobile & Tablet View */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background-color: black;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 15px 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  .nav-links.active {
    display: flex;
    height: auto;
    min-height: 100vh; /* Full screen to prevent clipping */
  }

  .nav-links li {
    margin-bottom: 10px;
  }

  /* ✅ Auth Buttons Fix */
  .auth-buttons {
    position: absolute;
    top: 60px; /* Ensure it's below the navbar */
    right: 20px;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    display: none; /* Initially hidden */
    flex-direction: column;
    align-items: center;
    z-index: 2000; /* Ensure it's above everything */
  }

  .auth-buttons.active {
    display: flex; /* Show when toggled */
  }

  .auth-buttons .login-btn,
  .auth-buttons .signup-btn {
    margin-left: 0;
    margin-bottom: 10px;
    width: 100%;
  }
}

</style>
