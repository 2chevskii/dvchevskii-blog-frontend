import ApiClientBase from "./ApiClientBase.ts";
import {AxiosInstance} from "axios";
import AdminApiClient from "./admin/AdminApiClient.ts";
import AuthApiClient from "./auth/AuthApiClient.ts";

export default class RootApiClient extends ApiClientBase {
  auth: AuthApiClient;
  admin: AdminApiClient

  constructor(axios: AxiosInstance) {
    super(axios);
    this.admin = new AdminApiClient(axios)
    this.auth = new AuthApiClient(axios)
  }
}
