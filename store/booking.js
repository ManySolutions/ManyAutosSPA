import { getSearchKeywords } from "~/api/booking";
import { getCartInstance } from "~/api/cart";

export const state = () => ({
  vehicle: null,
  modelId: null,
  cart: [],
  cartUpdatedAt: null,
  cartReceivedAt: null,
  cartContent: [],
  cartError: null,
  isCartLoading: false,
  hasPaymentPlan: null,
  referralId: null,
  isGetQuoteAlert: true,
  searchKeywords: [],
})

export const mutations = {
  REGISTER_VEHICLE(state, {vehicle, modelId}) {
    state.vehicle = vehicle;
    state.modelId = modelId;
    state.hasPaymentPlan = null;
    state.cart = [];
    state.cartContent = [];
    state.cartUpdatedAt = null;
    state.cartReceivedAt = null;
    state.isCartLoading = false;
    state.searchKeywords = [];
  },

  ADD_TO_CART(state, key) {
    state.cart.push(key)
    state.cartUpdatedAt = new Date().getTime();
  },

  REMOVE_FROM_CART(state, index) {
    state.cart.splice(index, 1);
    state.cartUpdatedAt = new Date().getTime();
  },

  UPDATE_CART_CONTENT(state, contents) {
    state.cartContent = contents;
    state.cartReceivedAt = new Date().getTime();
  },

  CLEAR_CART(state) {
    state.cart = [];
    state.cartUpdatedAt= null;
    state.cartReceivedAt= null;
    state.cartContent= [];
    state.hasPaymentPlan = false;
    state.referralId = null;
  },

  REFRESH_CART(state, items) {
    state.cart = items;
  },

  SET_CART_LOADING(state, isLoading) {
    state.isCartLoading = isLoading
  },

  HAS_PAYMENT_PLAN(state, status) {
    state.hasPaymentPlan = status;
  },

  SET_REFERRAL_ID(state, id) {
    state.referralId = id;
  },

  REMOVE_REFERRAL_ID(state) {
    state.referralId = null;
  },

  TOGGLE_GET_QUOTE_ALERT(state, status) {
    state.isGetQuoteAlert = status;
  },

  SET_SEARCH_KEYWORDS(state, items) {
    state.searchKeywords = items;
  },
}


export const getters = {
  vehicleName(state) {
    return state.vehicle
      ? state.vehicle.Mfr + ' ' + state.vehicle.Range
      : null
  },

  cartCount(state) {
    return state.cart.length || 0;
  },

  isCartEmpty(state) {
    return !(state.cart.length)
  }
}


export const actions = {
  getCart({ state, commit }) {
    commit('SET_CART_LOADING', false);

    const { modelId, cart, cartUpdatedAt, cartReceivedAt } = state;

    if (cartUpdatedAt < cartReceivedAt) {
      return null;
    }

    commit('SET_CART_LOADING', true);
    state.cartError = false;

    getCartInstance(modelId, cart)
      .then(res => {
        commit('UPDATE_CART_CONTENT', res);
      }).catch(err => {
        console.error('Some error occured while getting cart', err)
        state.cartError = err;
      }).finally(res => commit('SET_CART_LOADING', false))
  },
  /* **** */


  clearCart({ commit }) {
    commit('CLEAR_CART');
  },
  /* **** */


  getSearchKeywords({ commit, state }) {
    if (!state.modelId) return;

    // if (state.searchKeywords.length) return;

    getSearchKeywords(state.modelId).then(res => {
      commit('SET_SEARCH_KEYWORDS', res);
    });
  },
  /* **** */
}