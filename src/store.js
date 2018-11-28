import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        articles: [],
        loading: true,
        currentPage: 1,
        apiUrl: 'https://react-blog-api.bahdcasts.com/api'
    },
    getters: {
        isLoading: state => {
            return state.loading
        },
        getArticles: state => {
            return state.articles
        },
        getCurrentPage: state => {
            return state.currentPage
        }
    },
    actions: {
        fetchArticles (state) {
            state.commit('LOADING_UPDATED', true)
            Axios.get(`${this.state.apiUrl}/articles?page=${this.state.currentPage}`).then((response) => {
                state.commit('ARTICLES_UPDATED', response.data.data)
            }).finally(() => {
                state.commit('LOADING_UPDATED', false)
            })
        },
        readArticle (state, articleId) {
            state.commit('LOADING_UPDATED', true)
            Axios.get(`${this.state.apiUrl}/article/${articleId}`).then((response) => {
                state.commit('ARTICLE_LOADED', response.data.data)
            }).finally(() => {
                state.commit('LOADING_UPDATED', false)
            })
        },
    },
    mutations: {
        LOADING_UPDATED (state, loadingState) {
            state.loading = loadingState
        },
        SET_PAGE (state, page){
            state.currentPage = page
        },
        ARTICLES_UPDATED (state, articles){
            state.articles = articles
        }
    },
})

export default store