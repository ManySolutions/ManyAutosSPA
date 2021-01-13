export const state = () => ({
  accessToken: null,
  info: null,
  paymentPlanId: null,
});


export const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },
  SET_INFO(state, info) {
    state.info = info;
  },
  SET_PAYMENT_PLAN(state, id) {
    state.paymentPlanId = id;
  },
};


export const actions = {
  authorize({ commit }, { accessToken, user }) {
    commit('SET_ACCESS_TOKEN', accessToken);
    commit('SET_INFO', user);
  },

  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null);
    commit('SET_INFO', null);
  },
};


export const getters = {
  isAuth({ accessToken }) {
    return accessToken && accessToken.length > 1;
  }
}