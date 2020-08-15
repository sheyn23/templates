import Vue from 'vue';
import Vuex from 'vuex';

import region from './modules/region.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    region
  },
});
