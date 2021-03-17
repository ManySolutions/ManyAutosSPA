import http from "~/utils/http";

export async function getCartInstance(modelId, keys) {
  return (await http.post(`/get_cart/${modelId}`, {keys})).data
}

export async function addToCart(key, id, modelId) {
  return (await http.post('/cart', {key, id, modelId})).data
}

export async function getCart(key=null) {
  return (await http.get(`/cart?key=${key || ''}`)).data
}

export async function deleteInCart(key, id) {
  return (await http.post(`/cart/${id}`, {
    _method: 'DELETE',
    key
  })).data
}