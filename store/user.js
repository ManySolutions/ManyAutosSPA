import toastr from 'toastr';

export const state = () => ({
  accessToken: null,
  info: null,
  roles: null,
});


export const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },
  SET_INFO(state, info) {
    state.info = info;
  },
  SET_ROLES(state, roles) {
    state.roles = roles;
  },
};


export const actions = {
  authorize({ commit }, { accessToken, user, role }) {
    commit('SET_ACCESS_TOKEN', accessToken);
    commit('SET_INFO', user);
    commit('SET_ROLES', role);
  },

  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null);
    commit('SET_INFO', null);
    commit('SET_ROLES', null);

    toastr.success('Logged out successfully, please wait while redirecting');
  },
};


export const getters = {
  isAuth({ accessToken }) {
    return accessToken && accessToken.length > 1;
  },
  isContentAdmin({ roles }) {
    return roles && roles.includes('content-admin');
  },
}