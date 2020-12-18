export const state = () => ({
  accessToken: null,
  info: null,
});


export const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },
  SET_INFO(state, info) {
    state.info = info;
  },
};


export const actions = {
  authorize({ commit }, { accessToken, user }) {
    commit('SET_ACCESS_TOKEN', accessToken);
    commit('SET_INFO', user);
  }
};