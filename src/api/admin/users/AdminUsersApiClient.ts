import ApiClientBase from "../../ApiClientBase.ts";
import {AxiosInstance} from "axios";

export default class AdminUsersApiClient extends ApiClientBase {
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  async getAll(): Promise<Array<Record<string, any>>> {
    const response = await this.axios.get<Record<string, any>[]>("/users");
    return response.data;
  }
}
