import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import BootstrapVue from 'bootstrap-vue'
import { store } from "./store";

Vue.use(BootstrapVue);
Vue.use(VueNoty)

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
