<template>
    <div class="admin">
        <div class="cont" >
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
                        <th>Modify</th>
                    </tr>
                    <tr v-for="(user, index) in users" :key="index">
                        <td data-th="Supplier Code">{{ user.user_id }}</td>
                        <td data-th="Supplier Name">{{ user.username }}</td>
                        <td data-th="Invoice Number">{{ user.email }}</td>
                        <td data-th="Invoice Date">{{ user.password_hash }}</td>
                        <td data-th="Due Date">{{ user.phone_number }}</td>
                        <td data-th="Net Amount">{{ user.user_role }}</td>
                        <td data-th="Net Amount">

                        <button type="button" class="btn btn-secondary mb-3" @click="updateUID(user)" data-bs-toggle="modal" data-bs-target="#editUser" style="width: 5rem;">
                            Edit
                        </button>

                        <div class="modal fade" id="editUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update User</h5>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="info.username"
                                            required />
                                        </span>
                                    </div>


                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="info.user_role"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="info.phone_number"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="info.email"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="info.password_hash"
                                                required />
                                        </span>
                                    </div>
                                    
                                </form>
                            </div>
                            <div class="modal-footer d-flex flex-column justify-content-around">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="updateUser()">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 
                        <button style="width: 5rem;" type="button" @click="userDelete(user.userID)" class="btn btn-dark" :id="user.userID" deleteProduct >Delete</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
            <h1 style="padding-top: 50px; padding-bottom: 20px;" small>Movies</h1>

            <table class="rwd-table" new>
                <tbody>
                    <tr>
                        <th>Movie ID </th>
                        <th>Image</th>
                        <th>Title </th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Year Released</th>
                        <th>Modify</th>
                    </tr>
                    <tr v-for="(movie, index) in movies" :key="index">
                        <td data-th="Supplier Code">{{ movie.movie_id }}</td>
                        <td data-th="Supplier Name"><img :src="movie.img_link" style="width: 5rem;" /></td>
                        <td data-th="Invoice Number">{{ movie.title }}</td>
                        <td data-th="Invoice Date">{{ movie.description }}</td>
                        <td data-th="Due Date">{{ movie.rental_price }}</td>
                        <td data-th="Net Amount">{{ movie.year_released }} </td>
                        <td data-th="Net Amount">

                        <button type="button" class="btn btn-secondary mb-3" @click="updatemID(movie)" data-bs-toggle="modal" data-bs-target="#editMovie" style="width: 5rem;">
                            Edit
                        </button>

                        <div class="modal fade" id="editMovie" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update Movie</h5>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="movinfo.title"
                                            required />
                                        </span>
                                    </div>


                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="movinfo.description"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Email address" v-model="movinfo.rental_price"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Password" v-model="movinfo.img_link"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Password" v-model="movinfo.year_released"
                                                required />
                                        </span>
                                    </div>
                                    

                                </form>
                            </div>
                            <div class="modal-footer d-flex flex-column justify-content-around">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="updateUser()">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 
                        <button style="width: 5rem;" type="button" @click="" class="btn btn-dark" :id="movie.movie_id" deleteProduct >Delete</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import store from '@/store'
    import { onMounted, computed } from 'vue'

    import { ref } from 'vue';


  
    const info = ref({
        username: '',
        email: '',
        password_hash: '',
        user_role: '',
        phone_number: ''

    });

    const movinfo = ref({
        title: '',
        year_released: '',
        rental_price: '',
        description: '',
        img_link: ''

    });



    let uID = null

    function updateUID(user) {
        info.value = {
            username: user.username,
            email: user.email,
            password_hash: user.password_hash,
            user_role: user.user_role,
            phone_number: user.phone_number,
        }        
        uID = user.user_id
    }

    let mID

    function updatemID(movie) {
        movinfo.value = {
            title: movie.title,
            year_released: movie.year_released,
            rental_price: movie.rental_price,
            description: movie.description,
            img_link: movie.img_link
        }

        mID = movie.movie_id
    }


    function updateUser() {
        const data = {
            id : uID,
            load : info.value
        }

        store.dispatch('updateUser', data)
    }






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

.cont {
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
    width: 90% !important;
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

.cont{
    margin: 0 !important;
}
</style>
