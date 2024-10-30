import type {AxiosInstance} from "axios";

export default class ApiClientBase {
  constructor(protected axios: AxiosInstance) {
  }
}
