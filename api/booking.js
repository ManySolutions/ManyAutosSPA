import http from "~/utils/http";

export async function createBooking(data) {
  return (await http.post(`/create_order`, data))
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