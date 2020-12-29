import Repository, { baseUrl, serializeQuery } from "./Repository";

class PostRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getPostBySlug(payload) {
    const reponse = await Repository.get(`${baseUrl}/posts?slug=${payload}`)
      .then((response) => {
        if (response.data.length > 0) {
          return response.data[0];
        } else {
          return null;
        }
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
  }

  async getPostItemsByKeyword(payload) {
    const reponse = await Repository.get(
      `${baseUrl}/posts?title_contains=${payload}`
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
  }

  async getPostItemsByCategory(payload) {
    const reponse = await Repository.get(
      `${baseUrl}/posts?title_contains=${payload}`
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
  }
}

export default new PostRepository();
