import { createStore } from 'vuex';
import axios from 'axios';
import { useCookies } from "vue3-cookies";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const { cookies } = useCookies();

const store = createStore({
  state: {
    movies: [], // Store all movies
    movie: null, // Store single movie
    users: null,
    rentals : null
  },
  getters: {
    getMovies: (state) => state.movies, // Getter for all movies
    getSingleMovie: (state) => state.movie // Getter for single movie
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies; // Store all movies
    },
    setSingleMovie(state, movie) {
      state.movie = movie; // Store single movie
    },
    setUsers(state, users) {
      state.users = users; // Store single movie
    },
    setRentals(state, rentals) {
      state.rentals = rentals; // Store single movie
    }
  },
  actions: {
    async getAllMovies({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/movies'); // Correct API route
        commit('setMovies', response.data); // Store movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },

    async getRentedMovies({ commit }, id) {
      try {
        const response = await axios.get(`http://localhost:3000/rentals/${id}`); // Correct API route
        commit('setRentals', response.data); // Store movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async getAllUsers({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/users'); // Correct API route
        commit('setUsers', response.data); // Store movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async getSingleMovie({ commit }, movie_id) {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${movie_id}`); // Correct endpoint
        commit('setSingleMovie', response.data); // Store single movie
      } catch (error) {
        console.error('Error fetching single movie:', error);
      }
    },

    async Login({commit}, Payload){
      try {
        console.log(Payload);
        
        const {token, message, user} = await (await axios.post('http://localhost:3000/users/login', Payload)).data
        if(token){
          toast(`${message}`, {
            "theme": "colored",
            "type": "success",
            "dangerouslyHTMLString": true
          })

          cookies.set('legitUser',{user : user, token})
          setInterval(() =>{
            location.reload()
          }, 2000)
        } else {
          toast(`${message}`, {
            "theme": "colored",
            "type": "warning",
            "dangerouslyHTMLString": true
          })
        }
      } catch (error) {
        toast("Hello! Wow so easy!", {
          "theme": "colored",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
    },

    async SignUp({commit}, Payload){
      try {
        console.log(Payload);
        
        const {message, user} = await (await axios.post('http://localhost:3000/users/signup', Payload)).data
        if(user){
          toast(`${message}`, {
            "theme": "colored",
            "type": "success",
            "dangerouslyHTMLString": true
          })

          setInterval(() =>{
            location.reload()
          }, 2000)
        } else {
          toast(`${message}`, {
            "theme": "colored",
            "type": "warning",
            "dangerouslyHTMLString": true
          })
        }
      } catch (error) {
        toast("Oops... something went wrong😭", {
          "theme": "colored",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
    },

    async updateUser({commit}, Payload){
      try {
        console.log(Payload);

        const {message, result} = await (await axios.patch(`http://localhost:3000/users/update/${Payload.id}`, Payload.load)).data
        if(result){
          toast(`${message}`, {
            "theme": "colored",
            "type": "success",
            "dangerouslyHTMLString": true
          })

          setInterval(() =>{
            location.reload()
          }, 2000)
        } else {
          toast(`${message}`, {
            "theme": "colored",
            "type": "warning",
            "dangerouslyHTMLString": true
          })
        }
      } catch (error) {
        toast("Oops... something went wrong😭", {
          "theme": "colored",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
    },
    async updateMovies({commit}, Payload){
      try {
        console.log(Payload);

        const {message, result} = await (await axios.patch(`http://localhost:3000/movies/update/${Payload.id}`, Payload.load)).data
        if(result){
          toast(`${message}`, {
            "theme": "colored",
            "type": "success",
            "dangerouslyHTMLString": true
          })

          setInterval(() =>{
            location.reload()
          }, 2000)
        } else {
          toast(`${message}`, {
            "theme": "colored",
            "type": "warning",
            "dangerouslyHTMLString": true
          })
        }
      } catch (error) {
        toast("Oops... something went wrong😭", {
          "theme": "colored",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
    },
    async delete({commit}, Payload){
      try {
        console.log(Payload);

        const {message, result} = await (await axios.delete(`http://localhost:3000/${Payload.table}/delete/${Payload.id}`)).data
        if(result){
          toast(`${message}`, {
            "theme": "colored",
            "type": "success",
            "dangerouslyHTMLString": true
          })

          setInterval(() =>{
            location.reload()
          }, 2000)
        } else {
          toast(`${message}`, {
            "theme": "colored",
            "type": "warning",
            "dangerouslyHTMLString": true
          })
        }
      } catch (error) {
        toast("Oops... something went wrong😭", {
          "theme": "colored",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
    }
  },
  modules: {}
});

export default store; // Export store properly
