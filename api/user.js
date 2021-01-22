const { default: http } = require("~/utils/http");

export async function loginUser(data) {
  return (await http.post(`login/user`, data))
}

export async function registerUser(data) {
  return (await http.post(`signup/user`, data)).data
}

export async function logoutUser(http) {
  return (await http.get(`/auth/logout/user`)).data
}

export async function generateTicket(data, $http=null) {
  return (await ($http || http).post(`user/ticket`, data)).data
}

export async function autologin(user, signature) {
  return (await http.post(`/autologin/${user}?signature=${signature}`)).data
}

export async function updatePassword($http, user, signature, payload) {
  return (await $http.post(`/auth/set_password/${user}?signature=${signature}`, payload)).data
}