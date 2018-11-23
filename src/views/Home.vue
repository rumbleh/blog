<template>
    <div>
        <h1 class="text-center my-3">Welcome to my blog!</h1>
        <div class="row" v-if="loading">
            <div class="col-md-6 offset-md-3 text-center">
                <i class="fas fa-spin fa-spinner fa-3x"></i>
            </div>
        </div>
        <div class="row" v-if="!loading">
            <div class="col-md-8 offset-md-2 py-3" v-for="article in articles.data" :key="article.id">
                <Article :article="article" />
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    import config from '@/config'
    import Article from '@/components/Article'

    export default {
        components: {
            Article
        },
        name: "Home",
        data(){
            return {
                loading: true,
                articles: {}
            }
        },
        mounted(){
            this.getArticles()
        },
        methods: {
            getArticles(){
                this.loading = true
                Axios.get(`${config.apiUrl}/articles`).then(response => {
                    this.articles = response.data.data
                }).catch(() => {
                    this.$noty.error('Oops! Something went wrong while fetching articles.')
                }).finally(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>