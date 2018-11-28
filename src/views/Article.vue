<template>
    <div class="my-5 col-md-8 offset-md-2 py-3">
        <div class="row" v-if="loading">
            <div class="col-md-6 offset-md-3 text-center">
                <i class="fas fa-spin fa-spinner fa-3x"></i>
            </div>
        </div>
       <div class="col-md-10 offset-md-1" v-else>
           <div class="card">
               <img height="420px" class="card-img-top" :src="article.imageUrl" alt="">
               <div class="card-body">
                   <h1 class="card-title text-center my-3">{{ article.title }}</h1>
                   <div class="card-content" v-html="article.content">
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: "Article",
        data() {
            return {
                article: {},
                loading: true,
            }
        },
        mounted() {
            this.fetchArticle()
        },
        methods: {
            fetchArticle(){
                this.loading = true
                console.log(this.$route.params)
                if (this.$route.params.id === undefined){
                    Axios.get(`${this.$store.state.apiUrl}/articles}`).then((response) => {
                        this.article = response.data.data
                    }).finally(() => {
                        this.loading = false
                    })
                } else {
                    Axios.get(`${this.$store.state.apiUrl}/article/${this.$route.params.id}`).then((response) => {
                        this.article = response.data.data
                    }).finally(() => {
                        this.loading = false
                    })
                }
            }
        }

    }
</script>

<style scoped>

</style>