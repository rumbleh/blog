<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body my-4">
                    <h3 class="text-center">Signup</h3>
                    <div class="form-group">
                        <input v-model="name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group text-center">
                        <button @click="registerUser()" class="btn btn-info form-control">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Axios from 'axios'
    export default {
        name: "Signup",
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            registerUser(){
                Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }).then(response => {
                    console.log(response)
                }).catch(({ response }) => {
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>