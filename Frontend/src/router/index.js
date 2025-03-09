import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import MovieDetail from '../components/MoviesDetails.vue' // Import MovieDetail component
import ComingSoonView from '../views/ComingSoonView.vue'
import MyListView from '../views/MyListView.vue'
import HomeView from '@/views/HomeView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import cart from '@/components/cart.vue'
import Login from '@/components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/movies/:id',  // Route for individual movie details
    name: 'movie-details',
    component: MovieDetail, // Use MovieDetail component
    props: true
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: ComingSoonView
  },
  {
    path: '/my-list',
    name: 'my-list',
    component: MyListView
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
