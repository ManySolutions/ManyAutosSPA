import http from "~/utils/http";

export async function getCartInstance(modelId, keys) {
  return (await http.post(`/get_cart/${modelId}`, {keys})).data
}
