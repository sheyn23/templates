const state = {
  point: []
};

const getters = {
  getPoint: (state) => {
    return state.point[0] ? state.point[0] : null
  },
  getTitle: (state) => {
    return state.point[0].title
  },
};

const mutations = {
  setTitle: (state, title) => {
    state.point[0].title = title;
  },
  setPosition: (state, pos) => {
    state.point.push(pos);
  },
  closePoint: (state) => {
    state.point = [];
  },
};

const actions = {
  setTitle({ commit, state }, title) {
    commit('setTitle', title);
  },
  setPosition({ commit, state }, pos) {
    commit('setPosition', pos);
  },
  closePoint({ commit, state }) {
    commit('closePoint');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
