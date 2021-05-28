import axios from "axios";
export const isGrapql = true;
// const baseDomain = "http://api.diaryforlife.info";
const baseDomain = "https://bpecapi.azurewebsites.net/api";
// const baseDomain = "https://bpecapi.azurewebsites.net/api/Test/SendMessage";
const authorization_prefix = "Bearer ";
export const customHeaders = {
  // Accept: "application/json",
  Accept: "Application/json",
  /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
  baseUrl,
  headers: { "Content-Type": "Application/json" },
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
