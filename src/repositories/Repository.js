import axios from "axios";
export const isGrapql = true;
const baseDomain = "http://api.diaryforlife.info";
// const baseDomain = "http://localhost:8000";
const authorization_prefix = "Bearer ";
export const customHeaders = {
  Accept: "application/json",
  /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
