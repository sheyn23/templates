const state = {
  region: []
};

const getters = {
  getRegion: (state) => {
    return state.region[0] ? state.region[0] : null
  },
};

const mutations = {
  setRegion: (state, region) => {
    state.region = []
    state.region.push(region);
  },
  closeRegion: (state) => {
    state.region = [];
  },
};

const actions = {
  setRegion({ commit, state }, region) {
    commit('setRegion', region);
  },
  closeRegion({ commit, state }) {
    commit('closeRegion');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
