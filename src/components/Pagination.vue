<template>
    <div>
        <b-pagination-nav :number-of-pages="this.$store.state.articles.last_page"
                          align="center"
                          circle
                          :total-rows="this.$store.state.articles.total"
                          v-model="currentPage"
                          :per-page="this.$store.state.articles.per_page"
                          use-router
                          :link-gen="linkGen"
                          v-on:input="teste()">
        </b-pagination-nav>

    </div>
</template>

<script>

    export default {
        name: 'Pagination',
        mounted() {
            // console.log(this.$store.state.articles)
        },
        data () {
            return {
                currentPage: this.$store.state.currentPage,
            }
        },
        methods: {
            teste(){
                this.$store.commit('SET_PAGE', this.currentPage)
                this.$store.dispatch('fetchArticles').then( () => {
                    this.$store.commit('ARTICLES_UPDATED')
                    this.currentPage = this.$store.state.currentPage
                })
            },
            linkGen(page) {
               return '/page/' + page
            },
            change() {
            }
        }
    }
</script>
