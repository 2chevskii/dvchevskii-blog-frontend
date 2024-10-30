import ApiClientBase from "../ApiClientBase.ts";
import {AxiosInstance} from "axios";

export default class AuthApiClient extends ApiClientBase {
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  async getState(): Promise<AuthStateModel> {
    const response = await this.axios.get<AuthStateModel>('/auth')
      .catch(e => e.response);
    return response.data;
  }

  async signIn(request: SignInWithLoginPasswordRequest) {
    const response = await this.axios.post('/auth/signin', request);
  }

  async signUp(request: SignUpRequest) {
    const response = await this.axios.post('/auth/signup', request);
  }

  async signOut() {
    await this.axios.post('/auth/signout');
  }
}

export interface AuthStateModel {
  isAuthenticated: boolean;
  message: string;
  userId: number;
  username: string | null;
  isAdmin: boolean;
  avatarUrl: string | null;
}

export interface SignInWithLoginPasswordRequest {
  login: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  email: string | null;
  password: string;
}
