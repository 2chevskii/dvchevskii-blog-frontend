import ApiClientBase from "../ApiClientBase.ts";
import {AxiosInstance} from "axios";
import {EntityBaseDto} from "../common/EntityBaseDto.ts";

export default class ImagesApiClient extends ApiClientBase {
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  async upload(image: File): Promise<ImageDto> {
    const formData = new FormData();
    formData.append('file', image);

    const response = await this.axios.post<ImageDto>('/images', formData);

    return response.data;
  }
}

export interface ImageDto extends EntityBaseDto {
  filename: string;
}
