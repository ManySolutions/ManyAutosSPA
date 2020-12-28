const { default: http } = require("~/utils/http");

export async function requestToRegisterGarage(data) {
 return (await http.post(`request_to_register_your_garage`, data)).data;
}

export async function getApprovedGarage(garage, signature) {
  return (await http.get(
    `register_your_garage/${garage}?signature=${signature}`
  )).data;
}

export async function registerGarage(garage, data) {
  return (await http.post(
    `register_your_garage/${garage}`, data
  )).data;
}

export default {};