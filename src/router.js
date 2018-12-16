import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import Article from './views/Article'
import CreateArticle from './views/CreateArticle'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/article/:id',
            component: Article,
            props: []
        },
        {
            path: '/articles/create',
            component: CreateArticle,
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/page/:pagina',
            component: Home
        },
    ]
})

export default router;