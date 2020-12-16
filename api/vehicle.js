import http from "~/utils/http";

export async function getVehicleDetails(reg) {
  return (await http.get(`/get_vehicle/${reg}`)).data
}