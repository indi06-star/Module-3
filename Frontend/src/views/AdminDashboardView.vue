<template>
    <div class="admin">
        <div class="container" >
            <h1 style="padding-top: 50px; padding-bottom: 30px;">Admin Page</h1>
            <h1 style="padding-bottom: 20px; " small>Users</h1>
            <table class="rwd-table" style="padding-bottom: 50px !important;">
                <tbody>
                    <tr>
                        <th>User ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                    </tr>
                    <tr v-for="(user, index) in users" :key="index">
                        <td data-th="Supplier Code">{{ user.user_id }}</td>
                        <td data-th="Supplier Name">{{ user.username }}</td>
                        <td data-th="Invoice Number">{{ user.email }}</td>
                        <td data-th="Invoice Date">{{ user.password_hash }}</td>
                        <td data-th="Due Date">{{ user.phone_number }}</td>
                        <td data-th="Net Amount">{{ user.user_role }}</td>
                    </tr>
                </tbody>
            </table>
            <h1 style="padding-top: 50px; padding-bottom: 20px;" small>Movies</h1>

            <table class="rwd-table">
                <tbody>
                    <tr>
                        <th>Movie ID </th>
                        <th>Image</th>
                        <th>Title </th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Year Released</th>
                    </tr>
                    <tr v-for="(movie, index) in movies" :key="index">
                        <td data-th="Supplier Code">{{ movie.movie_id }}</td>
                        <td data-th="Supplier Name"><img :src="movie.img_link" style="width: 5rem;" /></td>
                        <td data-th="Invoice Number">{{ movie.title }}</td>
                        <td data-th="Invoice Date">{{ movie.description }}</td>
                        <td data-th="Due Date">{{ movie.rental_price }}</td>
                        <td data-th="Net Amount">{{ movie.year_released }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import store from '@/store'
import { onMounted, computed } from 'vue'


const movies = computed(() => {return store.state.movies})
const users = computed(() => {return store.state.users})

onMounted(()=>{
    store.dispatch('getAllUsers')
    store.dispatch('getAllMovies')
})

</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:600,700';

* { font-family: 'Open Sans', sans-serif; }

.container {
    text-align: center;
}

.admin{
    background-color: #111;
    min-height: 100dvh;
}

h1 {
    font-size: 2.4em;
    color: #FFD700;
}

h3 {
    font-size: 1.5em;
    color: #FFD700;
}

[small]{
    font-size: 1.5rem
}

.rwd-table {
    margin: auto;
    width: 85% !important;
    border-collapse: collapse;
    background: #1E1E1E;
    color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    
}

.rwd-table th {
    background: #FFD700;
    color: black;
    padding: 15px;
    text-align: left;
}

.rwd-table td {
    padding: 10px;
    border-bottom: 1px solid #FFD700;
}

.rwd-table tr:hover {
    background: #333;
}

@media screen and (max-width: 600px) {
    .rwd-table, .rwd-table tbody, .rwd-table tr, .rwd-table td, .rwd-table th {
        display: block;
        width: 100%;
    }

    .rwd-table tr {
        margin-bottom: 10px;
    }

    .rwd-table td {
        text-align: right;
        padding-left: 50%;
        position: relative;
    }

    .rwd-table td:before {
        content: attr(data-th) ": ";
        font-weight: bold;
        position: absolute;
        left: 10px;
        text-align: left;
    }
}
</style>
