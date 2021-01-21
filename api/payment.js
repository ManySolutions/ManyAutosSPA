const { default: http } = require("~/utils/http");

export async function getPaymentOptions(orderId, $http=null) {
  return (await (http || $http).get(`/bookings/payment/${orderId}`)).data
}


export async function begin_payment_assist(orderId, $http=null) {
  return (await (http || $http).post(`/auth/begin_payment_assist/${orderId}`)).data
}