import http from "~/utils/http";

export async function createBooking(data, $http=null) {
  return (await ($http || http).post(`/create_order`, data))
}


export async function getBookings($http=null) {
  return (await ($http || http).get(`/auth/get_bookings`)).data;
}


export async function getSingleBooking(id, $http=null) {
  return (await ($http || http).get(`/auth/booking_detail/${id}`)).data;
}

export async function getRequests(id, $http=null) {
  return (await ($http || http).get(`/auth/booking_detail/${id}/get_requests`)).data;
}

export async function serviceUpdate(orderId, serviceId, status, $http=null) {
  return (await ($http || http).post(`/auth/bookings/${orderId}/service/${serviceId}/${status}`, {
    _method: 'PATCH'
  })).data;
}

export async function requestAQuote(data, $http=null) {
  return (await ($http || http).post(`/request_a_quote`, data)).data;
}

export async function getQuoteInfo(key, signature, $http=null) {
  return (await ($http || http).get(`/quote_request/${key}/create_booking?signature=${signature}`));
}

export async function getSearchKeywords(modelId) {
  return (await http.get(`/get_parts_keywords/${modelId}`)).data;
}

export async function getInstallmentDetails(amount) {
  return (await http.post(`/payment_plan`, {amount})).data;
}