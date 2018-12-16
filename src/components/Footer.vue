<template>
    <b-navbar type="dark" variant="dark" sticky="true" fixed="bottom">

        <b-navbar-brand href="#" to="/">
            <!--<img src="../assets/logo.png" alt="" height="30px" width="30px">-->
        </b-navbar-brand>

        <b-nav vertical class="w-75">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>

    </b-navbar>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        mounted() {
        },
        computed : {
        },
        methods: {
        },
        name: "Footer"
    }
</script>

<style scoped>
</style>