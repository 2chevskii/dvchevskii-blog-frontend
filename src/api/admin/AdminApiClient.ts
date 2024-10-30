import ApiClientBase from "../ApiClientBase.ts";
import {AxiosInstance} from "axios";
import AdminPostsApiClient from "./posts/AdminPostsApiClient.ts";
import AdminUsersApiClient from "./users/AdminUsersApiClient.ts";

export default class AdminApiClient extends ApiClientBase {
  posts: AdminPostsApiClient
  users: AdminUsersApiClient

  constructor(axios: AxiosInstance) {
    super(axios);
    this.posts = new AdminPostsApiClient(axios)
    this.users = new AdminUsersApiClient(axios)
  }
}
