import Repository, { baseUrl } from "./Repository";

const commonRepository = () => ({
  async getDataList(payload) {
    console.log(payload);
    const reponse = await Repository.post(
      `${baseUrl}${payload.data.Getdata.Apiurl}`,
      payload.data
    )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
  },
});
export default commonRepository();
