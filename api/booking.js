import http from "~/utils/http";

export async function createBooking(data) {
  return (await http.post(`/create_order`, data))
}
