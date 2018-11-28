<template>
    <div>
        <h1 class="text-center my-3">Welcome to my blog!</h1>
        <div class="row" v-if="isLoading">
            <div class="col-md-6 offset-md-3 text-center">
                <i class="fas fa-spin fa-spinner fa-3x"></i>
            </div>
        </div>
        <div class="row" v-if="!isLoading">
            <div class="col-md-8 offset-md-2">
                <pagination use-router :lista="this.$store.getters.getArticles" class="text-center"/>
            </div>
            <div class="col-md-8 offset-md-2 py-3" v-for="article in this.$store.getters.getArticles.data" :key="article.id">
                <Article v:article="article">
                    <slot>Loading...</slot>
                </Article>
            </div>
            <div class="col-md-8 offset-md-2">
                <pagination use-router :lista="this.$store.getters.getArticles" class="text-center"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Article from '@/components/Article'
    import Pagination from '@/components/Pagination'

    export default {
        components: {
            Pagination,
            Article,
        },
        name: "Home",
        data(){
            return {
                articles : []
            }
        },
        mounted(){

            this.$store.dispatch('fetchArticles').then( () => {
               this.$store.commit('ARTICLES_UPDATED')
            })
        },
        computed: {
          isLoading () {
              return this.$store.getters.isLoading
          },
        },
    }
</script>

<style scoped>
</style>