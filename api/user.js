const { default: http } = require("~/utils/http");

export async function loginUser(data) {
  return (await http.post(`login/user`, data))
}

export async function registerUser(data) {
  return (await http.post(`signup/user`, data)).data
}

export async function logoutUser(http) {
  return (await http.get(`logout/user`)).data
}