import http from "~/utils/http";

export async function getAddress(postcode) {
  return (await http.get(`/get_postcode/${postcode}`)).data
}