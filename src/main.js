import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';


require('./db/models/index.js');
require('./assets/css/index.css');

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(VueCompositionAPI);
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
