<template>
  <div class="admin">
    <h1>Welcome Admin</h1>

    <!-- Movie Section -->
    <div class="section">
      <h2>Movies</h2>
      <label> 
        <span>Movie Title</span>
        <input type="text" v-model="title" /> 
      </label>
      <label>
        Description 
        <input type="text" v-model="description" /> 
      </label>
      <label> 
        Year Released
        <input type="text" v-model="year_released" /> 
      </label>
      <label>
        Duration
        <input type="text" v-model="duration" /> 
      </label>
      <label>
        Rental Price
        <input type="text" v-model="rental_price" /> 
      </label>
      <label>
        Trailer Url
        <input type="text" v-model="trailer_url" /> 
      </label>
      <label>
        Image Link
        <input type="text" v-model="img_link" /> 
      </label>
      <button @click="addMovie">Add Movie</button>
      <button v-if="movie_id" @click="updateMovie">Update Movie</button>
    </div>

    <!-- Movie Table -->
    <div class="section">
      <h2>Movies List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Year Released</th>
            <th>Duration</th>
            <th>Rental Price</th>
            <th>Trailer Url</th>
            <th>Image Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in $store.state.movies" :key="movie.movie_id">
            <td>{{ movie.title }}</td>
            <td>{{ movie.description }}</td>
            <td>{{ movie.year_released }}</td>
            <td>{{ movie.duration }}</td>
            <td>{{ movie.rental_price }}</td>
            <td class="trailer-cell">{{ movie.trailer_url }}</td> 
            <td>{{ movie.img_link }}</td>
            <td>
              <button class="delete" @click="deleteMovie(movie.movie_id)">Delete</button>
              <button class="edit" @click="editMovie(movie)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Users Section -->
    <div class="section">
      <h2>Users</h2>
      <label>
        <span>Username</span>
        <input type="text" v-model="username" />
      </label>
      <label>
        Email 
        <input type="text" v-model="email" /> 
      </label>
      <label> 
        Role
        <input type="text" v-model="role" /> 
      </label>
      <label>
        Phone Number
        <input type="text" v-model="phone_number" />
      </label>
      <button v-if="user_id" @click="updateUser">Update User</button>
    </div>

    <!-- Users Table -->
    <div class="section">
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in $store.state.users" :key="user.user_id">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.user_role }}</td>
            <td>{{ user.phone_number }}</td>
            <td>
              <button class="delete" @click="deleteUser(user.user_id)">Delete</button>
              <button class="edit" @click="editUser(user)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Movie Data
      title: '',
      description: '',
      year_released: '',
      duration: '',
      rental_price: '',
      trailer_url: '',
      img_link: '',
      movie_id: null,

      // User Data
      username: '',
      email: '',
      role: '',
      phone_number: '',
      user_id: null
    };
  },
  mounted() {
    // Fetch movie and user data when the component is mounted
    this.$store.dispatch('getData');
  },
  methods: {
    // Movie Methods
    addMovie() {
      const movieData = {
        title: this.title,
        description: this.description,
        year_released: this.year_released,
        duration: this.duration,
        rental_price: this.rental_price,
        trailer_url: this.trailer_url,
        img_link: this.img_link
      };

      this.$store.dispatch('postMovie', movieData);
    },
    deleteMovie(movie_id) {
      this.$store.dispatch('deleteMovie', movie_id);
    },
    editMovie(movie) {
      this.title = movie.title;
      this.description = movie.description;
      this.year_released = movie.year_released;
      this.duration = movie.duration;
      this.rental_price = movie.rental_price;
      this.trailer_url = movie.trailer_url;
      this.img_link = movie.img_link;
      this.movie_id = movie.movie_id;
    },
    updateMovie() {
      const updatedData = {
        title: this.title,
        description: this.description,
        year_released: this.year_released,
        duration: this.duration,
        rental_price: this.rental_price,
        trailer_url: this.trailer_url,
        img_link: this.img_link
      };

      this.$store.dispatch('patchMovie', { movie_id: this.movie_id, updatedData });
    },

    // User Methods
    deleteUser(user_id) {
      this.$store.dispatch('deleteUser', user_id);
    },
    editUser(user) {
      this.username = user.username;
      this.email = user.email;
      this.role = user.user_role;
      this.phone_number = user.phone_number;
      this.user_id = user.user_id;
    },
    updateUser() {
      const updatedData = {
        username: this.username,
        email: this.email,
        user_role: this.role,
        phone_number: this.phone_number
      };

      this.$store.dispatch('patchUser', { user_id: this.user_id, updatedData });
    }
  }
};
</script>

<style scoped>
.admin {
  padding: 20px;
  background-color: #111; /* Dark black background */
  color: #fff; /* White text */
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2em;
  color: #ffcc00; /* Yellow for the header */
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  color: #ffcc00;
  margin-top: 20px;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background-color: #222;
}

label {
  display: block;
  margin-bottom: 10px;
  color: #ccc; /* Light grey for labels */
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  background-color: #333;
  border: 1px solid #444;
  color: #fff;
  font-size: 1em;
  border-radius: 5px;
}

button {
  padding: 8px 16px; /* Reduced padding for smaller buttons */
  margin-top: 15px; /* Added more space between buttons */
  background-color: #ffcc00; /* Yellow background */
  color: #111;
  border: none;
  cursor: pointer;
  font-size: 0.9em; /* Reduced font size for smaller buttons */
  border-radius: 5px;
}

button:hover {
  background-color: #e6b800; /* Darker yellow on hover */
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #444;
}

th {
  background-color: #111;
  color: #ffcc00;
}

td {
  background-color: #333;
  color: #ccc;
}

button.delete {
  background-color: red; 
  color: white;
}

button.delete:hover {
  background-color: #d11a2a; /* Darker red on hover */
}

button.edit {
  background-color: #444;
  color: white;
}

button.edit:hover {
  background-color: #666;
}

.trailer-cell {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .admin {
    padding: 10px;
  }

  input, button {
    width: 100%;
    padding: 10px;
  }

  table {
    font-size: 0.9em;
  }
}
</style>
