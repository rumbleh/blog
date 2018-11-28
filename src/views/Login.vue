<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body my-4">
                    <h3 class="text-center">Login</h3>
                    <div class="form-group">
                        <input v-bind:class="{ 'is-valid': !errors.email && this.submitted, 'is-invalid': errors.email }" v-model="email" type="text" class="form-control" placeholder="Email">
                        <div class="errors" v-if="errors.email">
                            <small class="text-danger" v-for="error in errors.email" :key="error">{{ error }}</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{ 'is-valid': !errors.password && this.submitted, 'is-invalid': errors.password }" v-model="password" type="password" class="form-control" placeholder="Password">
                        <div class="errors" v-if="errors.password">
                            <small class="text-danger" v-for="error in errors.password" :key="error">{{ error }}</small>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <button @click="loginUser()" class="btn btn-success form-control">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Login' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Axios from 'axios'

    export default {
        name: "Login",
        beforeRouteEnter(to, from, next){
            if (localStorage.getItem("auth")){
                return next ({ path: '/' })
            } else
                next()
        },
        data(){
            return {
                email: '',
                password: '',
                errors: {},
                submitted: false,
                loading: false
            }
        },
        methods: {
            loginUser(){
                this.submitted = true
                this.loading = true
                Axios.post(`this.$store.apiUrl}/auth/login`, {
                    email: this.email,
                    password: this.password,
                }).then((response) => {
                    this.$noty.success('Successfully logged in.')
                    const { data } = response.data
                    localStorage.setItem('auth', JSON.stringify(data))
                    this.$root.auth = data
                    this.$router.push('/')

                }).catch(({ response }) => {
                    this.$noty.error('Oops! Something went wrong.')
                    if (response.status === 401){
                        this.errors = {
                            email: ['This credentials do not match our records.']
                        }
                    } else {
                        this.errors = response.data
                    }
                }).finally(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>