export const state = () => ({
  vehicle: null,
  modelId: null,
  cart: [],
  cartUpdatedAt: null,
})

export const mutations = {
  REGISTER_VEHICLE(state, {vehicle, modelId}) {
    state.vehicle = vehicle;
    state.modelId = modelId;
  },

  ADD_TO_CART(state, key) {
    state.cart.push(key)
    state.cartUpdatedAt = new Date().toISOString().substr(0, 10);
  },

  REMOVE_FROM_CART(state, index) {
    console.log('index', index);
    
    state.cart.splice(index, 1);
  }
}


export const getters = {
  vehicleName(state) {
    return state.vehicle
      ? state.vehicle.Mfr + ' ' + state.vehicle.Range
      : null
  }
}