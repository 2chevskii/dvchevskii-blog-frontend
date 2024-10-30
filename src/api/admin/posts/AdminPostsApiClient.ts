import ApiClientBase from "../../ApiClientBase.ts";
import {AxiosInstance} from "axios";

export default class AdminPostsApiClient extends ApiClientBase {
  constructor(axios: AxiosInstance) {
    super(axios);
  }
}
