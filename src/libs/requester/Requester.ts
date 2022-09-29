export type RequesterConfig = {
  url: string;
  method?: "get" | "post" | "put" | "delete";
  data?: Record<string, any> | FormData;
  headers: Record<string, string>;
};

class Requester {
  private static _getUrlWithSearchParams(
    url: string,
    params: Record<string, string>
  ) {
    return [url, new URLSearchParams(params).toString()]
      .filter(Boolean)
      .join("?");
  }

  get(
    url: string,
    config?: {
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ) {
    const { params = {}, headers } = config || {};

    return this.request({
      url: Requester._getUrlWithSearchParams(url, params),
      method: "get",
      headers,
    });
  }

  post(
    url: string,
    config?: {
      data?: Record<string, any> | FormData;
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ) {
    const { data = {}, params = {}, headers } = config || {};

    return this.request({
      url: Requester._getUrlWithSearchParams(url, params),
      method: "post",
      data,
      headers,
    });
  }

  put(
    url: string,
    config?: {
      data?: Record<string, any> | FormData;
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ) {
    const { data = {}, params = {}, headers } = config || {};

    return this.request({
      url: Requester._getUrlWithSearchParams(url, params),
      method: "put",
      data,
      headers,
    });
  }

  delete(
    url: string,
    config?: {
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ) {
    const { params = {}, headers } = config || {};

    return this.request({
      url: Requester._getUrlWithSearchParams(url, params),
      method: "delete",
      headers,
    });
  }

  async request(config: RequesterConfig) {
    const { url, method = "get", data, headers = {} } = config;
    const fetchConfig: any = {
      method: method,
      headers: headers,
      body: undefined,
    };
    if (data) {
      fetchConfig.body = data instanceof FormData ? data : JSON.stringify(data);
    }
    const res = await fetch(url, fetchConfig);
    return await res.json();
  }
}

export { Requester };
