import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyCuu0NDYQFSKwby4v3jTIqGdJBnRnAMhiA',
        authDomain: 'metesengul-c54f1.firebaseapp.com',
        databaseURL: 'https://metesengul-c54f1.firebaseio.com',
        projectId: 'metesengul-c54f1',
        storageBucket: 'metesengul-c54f1.appspot.com',
        messagingSenderId: '956998040039',
        appId: '1:956998040039:web:58bbbc25f7f1860b302542'
      }
    )
  }
}).$mount('#app')
