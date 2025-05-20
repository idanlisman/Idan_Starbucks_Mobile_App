import axios, { AxiosPromise } from "axios";
import storage from "./storage";

interface HeadersParamType {
  [key: string]: string;
}

class Network {
  async post(url: string, data: Object): AxiosPromise {
    return this._post(url, data, false);
  }

  async securedPost(url: string, data: Object): AxiosPromise {
    return this._post(url, data, true);
  }

  async get(url: string): AxiosPromise {
    return this._get(url);
  }

  private async _post(url: string, data: Object, isAuth: boolean): AxiosPromise {
    const headers: HeadersParamType = await this.getHeaders(isAuth);
    return axios.post(url, data, { headers });
  }

  private async _get(url: string): AxiosPromise {
    const headers: HeadersParamType = await this.getHeaders(true);
    return axios.get(url, { headers });
  }

  private async getHeaders(isAuth: boolean): Promise<HeadersParamType> {
    let headers: HeadersParamType = {};
    headers["Content-Type"] = "application/json";
    if (isAuth) headers["Authorization"] = await this.getBearerAuthentication();

    return headers;
  }

  private async getBearerAuthentication(): Promise<string> {
    const token: string | null = await storage.getToken();
    return `Bearer ${token ? token : ""}`;
  }
}

export default new Network();
