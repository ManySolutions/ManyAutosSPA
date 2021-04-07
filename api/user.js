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

export async function getRefferalLink($http) {
  return (await (http || $http).get(`/auth/referral_link`)).data
}

export async function getReferralOverview($http) {
  return (await (http || $http).get(`/auth/referral_orders`)).data
}

export async function claimReferral($http, data) {
  return (await (http || $http).post(`/auth/referral_payment_request`, data)).data
}

export async function sendReferralEmail($http, data) {
  return (await (http || $http).post(`/auth/referral_email`, data)).data
}

export async function verifyReferral(hash) {
  return (await http.get(`/verify_referral/${hash}`)).data
}

export async function forgotPassword(data) {
  return (await http.post(`/password/forgot`, data)).data
}

export async function subscribeMOTAlerts($http, data) {
  return (await (http || $http).post(`/subscribe/mot-alert`, data)).data
}