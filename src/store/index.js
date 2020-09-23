import Vue from 'vue';
import Vuex from 'vuex';

import modal from './modules/modal'
import region from './modules/region'
import point from './modules/point'
import note from './modules/note'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        modal,
        region,
        point,
        note,
    },
});