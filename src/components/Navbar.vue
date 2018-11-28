<template>
    <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" to="/">
            <img src="../assets/logo.png" alt="" height="30px" width="30px">
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto" v-if="!authUser" >
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/signup">Signup</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto" v-if="authUser" >
                <b-nav-item-dropdown right :text="`Hi ${authUser.name}`">
                    <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        mounted() {

        },
        computed : {
            authUser(){
                return this.$root.auth.user
            },
        },
        methods: {
            logout(){
                this.$noty.success('Successfully logged out')
                this.$root.auth = {}
                localStorage.removeItem('auth')
            },
        },

        name: "Navbar"
    }
</script>

<style scoped>
</style>