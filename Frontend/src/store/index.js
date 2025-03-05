import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Check if user is already logged in
    token: localStorage.getItem('token') || null,
    error: null,
    movies: null,
    users: null,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user)); 
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token); 
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    setMovies(state, payload) {
      state.movies = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },

  actions: {
    async signUpUser({ commit }, userData) {
      try {
        await axios.post('http://localhost:3000/users', userData);
        commit('SET_USER', userData); // Store user data
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Signup failed');
        throw error;
      }
    },

    async loginUser({ commit }, { email, password_hashed }) {
       let {data}= await axios.post('http://localhost:3000/users/login',payload)
        console.log(data)
        if(data.message){
          toast(data.message)
        }
      
    },

    async getData({ commit }) {
      try {
        const movieResponse = await axios.get('http://localhost:3000/movies');
        commit('setMovies', movieResponse.data);

        const userResponse = await axios.get('http://localhost:3000/users');
        commit('setUsers', userResponse.data);
      } catch (error) {
        commit('SET_ERROR', 'Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    },

    async deleteMovie({ commit }, movie_id) {
      try {
        await axios.delete(`http://localhost:3000/movies/${movie_id}`);
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Failed to delete movie');
        console.error('Error deleting movie:', error);
      }
    },

    async postMovie({ commit }, movieData) {
      try {
        await axios.post('http://localhost:3000/movies', movieData);
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Failed to add movie');
        console.error('Error adding movie:', error);
      }
    },

    async patchMovie({ commit }, { movie_id, updatedData }) {
      try {
        await axios.patch(`http://localhost:3000/movies/${movie_id}`, updatedData);
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Failed to update movie');
        console.error('Error updating movie:', error);
      }
    },

    async getUsers({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/users');
        commit('setUsers', response.data);
      } catch (error) {
        commit('SET_ERROR', 'Failed to fetch users');
        console.error('Error fetching users:', error);
      }
    },

    async deleteUser({ commit }, user_id) {
      try {
        await axios.delete(`http://localhost:3000/users/${user_id}`);
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Failed to delete user');
        console.error('Error deleting user:', error);
      }
    },

    async patchUser({ commit }, { user_id, updatedData }) {
      try {
        await axios.patch(`http://localhost:3000/users/${user_id}`, updatedData);
        location.reload();
      } catch (error) {
        commit('SET_ERROR', 'Failed to update user');
        console.error('Error updating user:', error);
      }
    },

    // Logout action
    logout({ commit }) {
      commit('LOGOUT'); // Clears the user and token data from state and localStorage
    }
  },

  getters: {
    currentUser: (state) => state.user,
    token: (state) => state.token,
    errorMessage: (state) => state.error,
    users: (state) => state.users,
  }
});
