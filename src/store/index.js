import Vue from 'vue';
import Vuex from 'vuex';

import region from './modules/region'
import point from './modules/point'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    region,
    point,
  },
});
