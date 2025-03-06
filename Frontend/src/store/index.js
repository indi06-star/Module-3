import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default createStore({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        error: null,
        movies: [],
        users: null,
        comingSoonMovies: [],
        loading: false,
        isAdmin: false, 
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
            state.isAdmin = false;
            state.signupSuccess = false;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
        SET_COMING_SOON_MOVIES(state, movies) {
            state.comingSoonMovies = movies;
        },
        SET_LOADING(state, isLoading) {
            state.loading = isLoading;
        },
        SET_IS_ADMIN(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        SET_SIGNUP_SUCCESS(state, value) {
          state.signupSuccess = value;
        },
        
    },
    actions: {
      async signUpUser({ commit }, userData) {
        try {
          await axios.post('http://localhost:3000/users', userData);
          // Removed: commit('SET_USER', userData); // Don't set user on signup
          toast.success('Signup successful! Please log in.', {
            position: 'top-center',
            autoClose: 3000,
          });
        } catch (error) {
          commit('SET_ERROR', 'Signup failed');
          toast.error('Signup failed. Please try again.', {
            position: 'top-center',
            autoClose: 3000,
          });
          throw error;
        }
      },
        async loginUser({ commit }, loginInfo) {
            try {
                const { data } = await axios.post('http://localhost:3000/users/login', loginInfo);
                commit('SET_USER', data.user);
                commit('SET_TOKEN', data.token);
                const isAdmin = data.user.email && data.user.email.endsWith('@StreamX.com');
                commit('SET_IS_ADMIN', isAdmin);
                toast(data.message, {
                    type: 'success',
                    position: 'top-center',
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                    autoClose: 1500,
                    transition: 'zoom',
                    dangerouslyHTMLString: true,
                });
            } catch (error) {
                console.error('Login error:', error);
                toast.error(error.response?.data?.message || 'Login failed');
                commit('SET_ERROR', error.response?.data?.message || 'Login failed');
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
        async deleteMovie({ commit, dispatch }, movie_id) {
            try {
                await axios.delete(`http://localhost:3000/movies/${movie_id}`);
                dispatch('getData'); // Re-fetch data
            } catch (error) {
                commit('SET_ERROR', 'Failed to delete movie');
                console.error('Error deleting movie:', error);
            }
        },
        async postMovie({ commit, dispatch }, movieData) {
            try {
                await axios.post('http://localhost:3000/movies', movieData);
                dispatch('getData'); // Re-fetch data
            } catch (error) {
                commit('SET_ERROR', 'Failed to add movie');
                console.error('Error adding movie:', error);
            }
        },
        async patchMovie({ commit, dispatch }, { movie_id, updatedData }) {
            try {
                await axios.patch(`http://localhost:3000/movies/${movie_id}`, updatedData);
                dispatch('getData'); // Re-fetch data
            } catch (error) {
                commit('SET_ERROR', 'Failed to update movie');
                console.error('Error updating movie:', error);
            }
        },
        async deleteUser({ commit, dispatch }, user_id) {
            try {
                await axios.delete(`http://localhost:3000/users/${user_id}`);
                dispatch('getData'); // Re-fetch data
            } catch (error) {
                commit('SET_ERROR', 'Failed to delete user');
                console.error('Error deleting user:', error);
            }
        },
        async patchUser({ commit, dispatch }, { user_id, updatedData }) {
            try {
                await axios.patch(`http://localhost:3000/users/${user_id}`, updatedData);
                dispatch('getData'); // Re-fetch data
            } catch (error) {
                commit('SET_ERROR', 'Failed to update user');
                console.error('Error updating user:', error);
            }
        },
        async fetchComingSoonMovies({ commit }) {
            commit('SET_LOADING', true);
            try {
                const response = await fetch('http://localhost:3000/coming_soon');
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                commit('SET_COMING_SOON_MOVIES', data);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        logout({ commit }) {
            commit('LOGOUT');
        },
        
    },
    getters: {
        currentUser: (state) => state.user,
        token: (state) => state.token,
        errorMessage: (state) => state.error,
        movies: (state) => state.movies,
        users: (state) => state.users,
        comingSoonMovies: (state) => state.comingSoonMovies,
        loading: (state) => state.loading,
        error: (state) => state.error,
        isAdmin: (state) => state.isAdmin,
        signupSuccess: (state) => state.signupSuccess,
        
    },
});