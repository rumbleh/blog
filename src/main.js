import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import BootstrapVue from 'bootstrap-vue'
import { store } from "./store"
import wysiwyg from "vue-wysiwyg"
import "vue-wysiwyg/dist/vueWysiwyg.css"

Vue.use(BootstrapVue)
Vue.use(VueNoty)
Vue.use(wysiwyg, {})
Vue.config.productionTip = false

const authData = localStorage.getItem("auth")
new Vue({
    router,
    store,
    data: {
        auth: authData ? JSON.parse(authData) : {}
    },
    render: h => h(App),
}).$mount('#app')
