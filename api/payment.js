const { default: http } = require("~/utils/http");

export async function getPaymentOptions(orderId, $http=null) {
  return (await (http || $http).get(`/bookings/payment/${orderId}`)).data
}