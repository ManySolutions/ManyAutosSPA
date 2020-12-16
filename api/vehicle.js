import http from "~/utils/http";

export async function getVehicleDetails(reg) {
  return (await http.get(`/get_vehicle/${reg}`)).data
}


export async function getServices(modelId) {
  return (await http.get(`/get_vehicle_service/${modelId}`)).data
}


export async function getPartsGroup(modelId) {
  return (await http.get(`/get_parts_group/${modelId}`)).data
}


export async function getPartsByGroupCode(modelId, groupCode) {
  return (await http.get(`/get_vehicle_parts/${modelId}/${groupCode}`)).data
}

