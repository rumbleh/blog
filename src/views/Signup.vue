<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body my-4">

                    <h3 class="text-center">Signup</h3>
                    <div class="form-group">
                        <input v-bind:class="{ 'is-valid': !errors.name && this.submitted, 'is-invalid': errors.name }" v-model="name" type="text" class="form-control" placeholder="Name">
                        <div class="errors" v-if="errors.name">
                            <small class="text-danger" v-for="error in errors.name" :key="error">{{ error }}</small>
                        </div>
                    </div>
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
                        <button @click="registerUser()" class="btn btn-info form-control" :disabled="loading">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Signup' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Axios from 'axios'
    import config from '@/config'
    export default {
        name: "Signup",
        beforeRouteEnter(to, from, next){
            if (localStorage.getItem("auth")){
                return next ({ path: '/' })
            }
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                errors: {},
                submitted: false,
                loading: false
            }
        },
        methods: {
            registerUser(){
                this.submitted = true
                this.loading = true
                Axios.post(`${config.apiUrl}/auth/register`, {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    this.$noty.success('Successfully registered!')
                    const { data } = response.data
                    localStorage.setItem('auth', JSON.stringify(data))
                    this.$root.auth = data
                    this.$router.push('/')
                }).catch(({ response }) => {
                    this.$noty.error('Oops! Something went wrong.')
                    this.errors = response.data
                }).finally(() => {
                  this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>