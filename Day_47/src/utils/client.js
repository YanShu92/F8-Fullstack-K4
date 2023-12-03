export const client = {
  serverApi: import.meta.env.VITE_SERVER_API,
  apiKey: null,
  setUrl: function (url) {
    this.serverApi = url;
  },

  setApi: function (api) {
    this.apiKey = api;
  },

  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);

    const data = await response.json();
    return { response, data };
  },

  //http get
  get: function (url) {
    return this.send(url);
  },

  //http post
  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  //http put
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  //http patch
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  //http delete
  delete: function (url, body) {
    return this.send(url, "DELETE");
  },
};
