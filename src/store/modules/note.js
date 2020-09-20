const state = {
    note: []
};

const getters = {
    getNote: (state) => {
        return state.note[0] ? state.note[0] : null
    },
    getNoteTitle: (state) => {
        return state.note[0].title
    },
};

const mutations = {
    setNoteTitle: (state, title) => {
        state.note[0].title = title;
    },
    closeNote: (state) => {
        state.note = [];
    },
};

const actions = {
    setNoteTitle({ commit, state }, title) {
        commit('setNoteTitle', title);
    },
    closeNote({ commit, state }) {
        commit('closeNote');
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};