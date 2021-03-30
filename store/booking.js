import { getSearchKeywords, getInstallmentDetails } from "~/api/booking";
import { addToCart, deleteInCart, getCart, getCartInstance } from "~/api/cart";

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
  installmentPlanDetails: {},
  loadingInstallment: false,
  regDialog: false,
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
    state.cartUpdatedAt= null;
    state.cartReceivedAt= null;
    state.cartContent = {};
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

  SET_INSTALLMET_DETAILS(state, items) {
    state.installmentPlanDetails = items;
  },

  SET_LOADING_INSTALLMENT(state, status) {
    state.loadingInstallment = status;
  },

  TOGGLE_REG_DIALOG(state, status) {
    state.regDialog = status;
  },
}


export const getters = {
  vehicleName(state) {
    return state.vehicle
      ? state.vehicle.Mfr + ' ' + state.vehicle.Range
      : null
  },

  cart(state) {
    return state.cartContent.items;
  },

  cartCount(state) {
    return Object.keys(state.cartContent.items || {}).length;
  },

  isCartEmpty(state) {
    return !Object.keys(state.cartContent.items || {}).length;
  },

  cartKey(state) {
    return state.cartContent.key || '';
  },

  cartTotal(state) {
    return state.cartContent.total || '00.00';
  },

  cartSubTotal(state) {
    return state.cartContent.subtotal || '00.00';
  },
}


export const actions = {
  getCart({ state, commit, dispatch, getters }) {
    commit('SET_CART_LOADING', false);

    const { modelId, cart, cartUpdatedAt, cartReceivedAt } = state;

    if (cartUpdatedAt < cartReceivedAt) {
      return null;
    }

    commit('SET_CART_LOADING', true);
    commit('SET_LOADING_INSTALLMENT', true);
    state.cartError = false;

    getCart(getters.cartKey || null)
      .then(res => {
        commit('UPDATE_CART_CONTENT', res);
        dispatch('getInstallmentPlan');
      }).catch(err => {
        console.error('Some error occured while getting cart', err)
        state.cartError = err;
      }).finally(res => commit('SET_CART_LOADING', false))
  },
  /* **** */


  addToCart({getters, state, commit, dispatch}, {id, modelId}) {
    commit('SET_CART_LOADING', true);
    commit('SET_LOADING_INSTALLMENT', true);
    state.cartError = false;

    addToCart(getters.cartKey, id, modelId).then(res => {
      commit('UPDATE_CART_CONTENT', res);
      dispatch('getInstallmentPlan');
    }).catch(err => {
      console.error('Some error occured while getting cart', err)
      state.cartError = err;
    }).finally(res => commit('SET_CART_LOADING', false))
  },
  /* **** */


  removeFromCart({getters, state, commit, dispatch}, id) {
    commit('SET_CART_LOADING', true);
    commit('SET_LOADING_INSTALLMENT', true);
    state.cartError = false;

    deleteInCart(getters.cartKey, id).then(res => {
      commit('UPDATE_CART_CONTENT', res);
      dispatch('getInstallmentPlan');
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

    if (state.searchKeywords.length) return;

    getSearchKeywords(state.modelId).then(res => {
      commit('SET_SEARCH_KEYWORDS', res);
    });
  },
  /* **** */

  getInstallmentPlan({ commit, state }) {
    if (!state.hasPaymentPlan) return;
    
    commit('SET_LOADING_INSTALLMENT', true);
    commit('SET_INSTALLMET_DETAILS', {});

    getInstallmentDetails(state.cartContent.subtotal)
      .then(res => commit('SET_INSTALLMET_DETAILS', res.data))
      .finally(() => commit('SET_LOADING_INSTALLMENT', false));
  },
  /* **** */
}