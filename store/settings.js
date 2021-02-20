export const state = () => ({
  motPrice: '34.99',
  redirect: {
    to: null,
    referrer: null,
  },
});


export const mutations = {
  SET_REDIRECT(state, {to, referrer}) {
    state.redirect = {to, referrer};
  },

  RESET_REDIRECT(state) {
    state.redirect = {
      to: null,
      referrer: null,
    };
  }
}