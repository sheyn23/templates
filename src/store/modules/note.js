const state = {
    blocks: [
        [
            { y: '25', points: [] },
            { y: '41', points: [] },
            { y: '57', points: [] },
            { y: '73', points: [] },
            { y: '89', points: [] },
            { y: '105', points: [] },
        ],
        [
            { y: '25', points: [] },
            { y: '41', points: [] },
            { y: '57', points: [] },
            { y: '73', points: [] },
            { y: '89', points: [] },
            { y: '105', points: [] },
        ]
    ]
};

const getters = {
    getBlocks: (state) => {
        return state.blocks
    },
};

const mutations = {
    setBlock: (state) => {
        state.blocks.push([
            { y: '25', points: [] },
            { y: '41', points: [] },
            { y: '57', points: [] },
            { y: '73', points: [] },
            { y: '89', points: [] },
            { y: '105', points: [] },
        ])
    },
    setPoint: (state, point) => {
        state.blocks[point.block][point.line].points.push({ title: point.title, x: point.x })
    },
    remPoint: (state, point) => {
        console.log('test', state.blocks[point.block][point.line].points);
        state.blocks[point.block][point.line].points.splice(point.index, 1)
    },
};

const actions = {
    setBlock({ commit, state }) {
        commit('setBlock');
    },
    setPoint({ commit, state }, point) {
        commit('setPoint', point);
    },
    remPoint({ commit, state }, point) {
        commit('remPoint', point);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};