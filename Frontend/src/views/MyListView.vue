<template>
    <div class="admin">
        <div class="container" >
            <h1 style="padding-top: 50px; padding-bottom: 30px;">My List</h1>
            <table class="rwd-table" style="padding-bottom: 50px !important;">
                <tbody>
                    <tr>
                        <th>Movie</th>
                        <th>Title </th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Total Price</th>
                    </tr>
                    <tr v-for="(rental, index) in rentals" :key="index">
                        <td data-th="Supplier Code"><img :src="rental.img_link" style="width: 5rem;"/></td>
                        <td data-th="Supplier Name">{{ rental.title }}</td>
                        <td data-th="Invoice Number">{{ rental.rental_start }}</td>
                        <td data-th="Invoice Date">{{ rental.rental_end }}</td>
                        <td data-th="Invoice Date">{{ rental.total_cost }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
    
</template>

<script setup>
import store from '@/store'
import { onMounted, computed } from 'vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


const rentals = computed(() => {return store.state.rentals})

onMounted(()=>{
    store.dispatch('getRentedMovies', cookies.get('legitUser')?.user[0].user_id)
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

  
