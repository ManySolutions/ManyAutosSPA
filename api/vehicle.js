import http from "~/utils/http";

export async function getVehicleDetails(reg) {
  return (await http.get(`/get_vehicle/${reg}`)).data
}


export async function getServices(modelId) {
  return (await http.get(`/get_vehicle_service/${modelId}`)).data
}


export async function getSearchPart(modelId, keyword) {
  return (await http.get(`/search_service/?modelId=${modelId}&keyword=${keyword}`)).data
}


export async function getPartsGroup(modelId) {
  return (await http.get(`/get_parts_group/${modelId}`)).data
}


export async function getPartsByGroupCode(modelId, groupCode) {
  return (await http.get(`/get_vehicle_parts/${modelId}/${groupCode}`)).data
}

export async function saveCustomVehicle(model_id, reg_no='') {
  return (await http.post(`/vehicle/manual/store`, {
    model_id, reg_no
  })).data
}