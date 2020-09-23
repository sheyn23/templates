const state = {
    modal: []
};

const getters = {
    getModal: (state, getters, rootState) => {
        return state.modal;
    },
    getActiveModal: (state, getters, rootState) => {
        return state.modal[0];
    },
};

const mutations = {
    pushModal(state, modal) {
        state.modal.push(modal);
    },
    closeModal(state) {
        state.modal = [];
    },
};

const actions = {
    newModal({ commit, state }, modal) {
        commit('pushModal', modal)
    },
    closeModal({ commit, state }) {
        commit('closeModal')
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};