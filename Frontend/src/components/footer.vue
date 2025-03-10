<template>
  <footer>
  <div class="footer-container">
      <div class="footer-logo">
      <h2>StreamX</h2>
      <p>Bringing entertainment to you.</p>
      </div>
      <div class="footer-info">
      <p>© 2025 StreamX. All rights reserved.</p>
      <p>Content availability may vary by region.</p>
      </div>
      <div class="footer-social">
      <p>Follow us:</p>
      <div class="social-icons">
          <a href="https://web.facebook.com/profile.php?id=61573644071986" title="facebook icons" target="_blank"><img src="https://i.postimg.cc/bvP8Q0TR/facebook-1.png" alt="facebook" style="width: 2rem"/></a>
          <a href="https://www.instagram.com/anathimnotoz/" title="instagram icons" target="_blank"><img src="https://i.postimg.cc/R0tdzK52/instagram.png" alt="instagram" style="width: 2rem"/></a>
          <a href="https://x.com/AnathiMnot68642" title="twitter icons" target="_blank"><img src="https://i.postimg.cc/ry7Sqzgk/twitter-1.png" alt="twitter" style="width: 2rem"/></a>
      </div>
      </div>

  </div>
  </footer>

</template>

<script setup>

</script>

<style scoped>
/* Style the footer section */
footer {
background-color: #111 !important; /* Dark background */
color: #fff; /* White text */
padding: 20px 10px !important; /* Add padding */
font-family: Arial, sans-serif; /* Font style */
transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
min-width: 100dvw !important;
}

/* Arrange footer content */
.footer-container {
display: flex; /* Use flexbox */
flex-direction: column; /* Stack vertically */
align-items: center; /* Center align */
max-width: 100%; /* Limit width */
margin: auto; /* Center horizontally */
}

/* Style footer logo */
.footer-logo h2 {
font-size: 1.5rem; /* Font size */
margin-bottom: 5px; /* Space below */
color: #ffcc00; /* Yellow color */
}

/* Style footer info and social links */
.footer-info, .footer-social {
margin-top: 10px; /* Add spacing */
font-size: 0.9rem; /* Font size */
opacity: 0.8; /* Slightly transparent */
}

/* Arrange social icons horizontally */
.social-icons {
display: flex; /* Align horizontally */
justify-content: flex-start; /* Center align */
gap: 15px; /* Add spacing between icons */
font-size: 1.5rem; /* Icon size */
margin-top: 5px; /* Add margin */
}

/* Change social icon color on hover */
.social-icons i {
cursor: pointer; /* Show pointer cursor */
transition: color 0.3s ease; /* Smooth color transition */
}

.social-icons i:hover {
color: #ffcc00; /* Yellow on hover */
}

/* Style dark mode toggle button */
#darkModeBtn {
background-color: #444; /* Dark gray background */
color: white; /* White text */
border: none; /* No border */
padding: 10px 20px; /* Add padding */
font-size: 1rem; /* Set font size */
cursor: pointer; /* Show pointer cursor */
border-radius: 5px; /* Rounded corners */
transition: background 0.3s ease; /* Smooth background transition */
}

/* Darken button on hover */
#darkModeBtn:hover {
background-color: #666; 
}

/* ===========================
 Dark Mode Styles
 =========================== */

/* Change background and text colors in dark mode */
.dark-mode {
background-color: #f5f5f5; /* Light background */
color: #333; /* Dark text */
}

/* Change footer colors in dark mode */
.dark-mode footer {
background-color: #222; /* Darker footer */
color: #ddd; /* Light text */
}

/* Change header colors in dark mode */
.dark-mode header {
background-color: #eee; /* Light header */
color: #111; /* Dark text */
}

/* Adjust footer layout on wider screens */
@media (min-width: 768px) {
.footer-container {
  flex-direction: row; /* Arrange horizontally */
  justify-content: space-between; /* Space out items */
  text-align: left; /* Align text to the left */
}

/* Distribute space evenly */
.footer-logo, .footer-info, .footer-social {
  flex: 1;
  padding: 10px; /* Add padding */
}
}

</style>