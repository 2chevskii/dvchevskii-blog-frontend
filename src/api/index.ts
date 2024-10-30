import axios from 'axios'
import type {SignUpRequest} from './auth/requests/SignUpRequest'
import type {SignInRequest} from './auth/requests/SignInRequest'
import type {CreatePostRequest} from './admin/content/posts/requests/CreatePostRequest'
import RootApiClient from "./RootApiClient.ts";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

const rootApiClient = new RootApiClient(axiosInstance);

const useApiClient = () => {
  return rootApiClient
};

export {
  useApiClient,
  apiClient,
  SignUpRequest,
  SignInRequest,
  CreatePostRequest
}
